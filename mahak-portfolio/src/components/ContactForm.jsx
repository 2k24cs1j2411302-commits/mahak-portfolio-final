import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, Send } from 'lucide-react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const EMPTY = { name: '', email: '', subject: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!EMAIL_RE.test(v.email.trim())) errors.email = 'Please enter a valid email address.';
  if (v.subject.trim().length < 3) errors.subject = 'Subject should be at least 3 characters.';
  if (v.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function ContactForm() {
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });
  const [sending, setSending] = useState(false);
  const inFlight = useRef(false); // blocks duplicate submissions even before re-render

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (inFlight.current) return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ type: 'error', text: 'Please fix the highlighted fields.' });
      return;
    }

    if (!CONFIGURED) {
      setStatus({
        type: 'error',
        text: 'The contact form is not configured yet. Please email me directly at 2K24.cs1j.2411302@gmail.com.',
      });
      return;
    }

    inFlight.current = true;
    setSending(true);
    setStatus({ type: 'idle', text: '' });
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus({ type: 'success', text: 'Thanks! Your message has been sent. I will get back to you soon.' });
      setValues(EMPTY);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        text: 'Sorry, the message could not be sent. Please try again or email me directly.',
      });
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  };

  const field = (name, label, type = 'text', multiline = false) => {
    const id = `contact-${name}`;
    const err = errors[name];
    const common = {
      id,
      name,
      value: values[name],
      onChange,
      className: `input ${err ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : ''}`,
      'aria-invalid': Boolean(err),
      'aria-describedby': err ? `${id}-error` : undefined,
      required: true,
      disabled: sending,
    };
    return (
      <div>
        <label htmlFor={id} className="mb-1 block text-sm font-medium">{label}</label>
        {multiline ? (
          <textarea rows={5} {...common} />
        ) : (
          <input type={type} {...common} />
        )}
        {err && (
          <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-500">{err}</p>
        )}
      </div>
    );
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        {field('name', 'Name')}
        {field('email', 'Email', 'email')}
      </div>
      {field('subject', 'Subject')}
      {field('message', 'Message', 'text', true)}

      <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto">
        {sending ? (
          <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Sending...</>
        ) : (
          <><Send size={16} aria-hidden="true" /> Send Message</>
        )}
      </button>

      <div aria-live="polite" className="min-h-[1.5rem] text-sm">
        {status.text && (
          <p className={status.type === 'success' ? 'text-emerald-500' : 'text-red-500'}>{status.text}</p>
        )}
      </div>
    </form>
  );
}
