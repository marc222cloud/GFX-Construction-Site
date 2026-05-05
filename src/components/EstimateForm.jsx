import { useState } from "react";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const formText = {
  en: {
    ariaLabel: "Get a free estimate for",
    kicker: "GET A FREE ESTIMATE",
    firstName: "First Name:",
    lastName: "Last Name:",
    email: "Email:",
    phone: "Phone Number:",
    message: "What can we help you with?",
    required: "(required)",
    submit: "Request Estimate",
    errors: {
      firstName: "First name is required.",
      lastName: "Last name is required.",
      email: "Email is required.",
      phone: "Phone number is required.",
      message: "Please tell us what you need help with.",
    },
    success: "request sent! We'll reach out soon.",
  },
  es: {
    ariaLabel: "Obtenga un estimado gratis para",
    kicker: "OBTENGA UN ESTIMADO GRATIS",
    firstName: "Nombre:",
    lastName: "Apellido:",
    email: "Correo electrónico:",
    phone: "Número de teléfono:",
    message: "¿En qué podemos ayudarle?",
    required: "(requerido)",
    submit: "Solicitar Estimado",
    errors: {
      firstName: "El nombre es requerido.",
      lastName: "El apellido es requerido.",
      email: "El correo electrónico es requerido.",
      phone: "El número de teléfono es requerido.",
      message: "Por favor díganos en qué necesita ayuda.",
    },
    success: "enviado. Nos comunicaremos pronto.",
  },
};

export default function EstimateForm({ serviceName = "Estimate", language = "en" }) {
  const text = formText[language] || formText.en;
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function update(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.firstName.trim()) return text.errors.firstName;
    if (!form.lastName.trim()) return text.errors.lastName;
    if (!form.email.trim()) return text.errors.email;
    if (!form.phone.trim()) return text.errors.phone;
    if (!form.message.trim()) return text.errors.message;
    return "";
  }

  async function onSubmit(e) {
    e.preventDefault();
    const err = validate();

    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }

    // TODO: connect to backend/API later
    setStatus({ type: "success", message: `${serviceName} ${text.success}` });
    setForm(initial);
  }

  return (
    <section style={styles.card} aria-label={`${text.ariaLabel} ${serviceName}`}>
      <div style={styles.header}>
        <div style={styles.kicker}>{text.kicker}</div>
      </div>

      <form onSubmit={onSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.field}>
            <label style={styles.label}>
              {text.firstName} <span style={styles.req}>{text.required}</span>
            </label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={update}
              style={styles.input}
              autoComplete="given-name"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>
              {text.lastName} <span style={styles.req}>{text.required}</span>
            </label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={update}
              style={styles.input}
              autoComplete="family-name"
            />
          </div>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>
            {text.email} <span style={styles.req}>{text.required}</span>
          </label>
          <input
            name="email"
            value={form.email}
            onChange={update}
            style={styles.input}
            type="email"
            autoComplete="email"
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>
            {text.phone} <span style={styles.req}>{text.required}</span>
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            style={styles.input}
            type="tel"
            autoComplete="tel"
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>
            {text.message} <span style={styles.req}>{text.required}</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            style={styles.textarea}
            rows={5}
          />
        </div>

        {status.type !== "idle" && (
          <div
            style={{
              ...styles.status,
              borderColor: status.type === "error" ? "#ff6b6b" : "#57d38c",
            }}
          >
            {status.message}
          </div>
        )}

        <button type="submit" style={styles.button}>
          {text.submit}
        </button>
      </form>
    </section>
  );
}

const styles = {
  card: {
    background: "#202020",
    color: "#f2f2f2",
    padding: "36px 34px 30px",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  header: {
    marginBottom: 22,
  },
  kicker: {
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: 500,
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: "#f2f2f2",
  },
  req: {
    fontSize: 12,
    color: "#b7b7b7",
  },
  input: {
    width: "100%",
    height: 38,
    padding: "8px 10px",
    border: "none",
    outline: "none",
    background: "#d9d9d9",
    color: "#111",
    borderRadius: 0,
  },
  textarea: {
    width: "100%",
    minHeight: 116,
    padding: "10px",
    border: "none",
    outline: "none",
    background: "#d9d9d9",
    color: "#111",
    borderRadius: 0,
    resize: "vertical",
  },
  button: {
    marginTop: 8,
    alignSelf: "flex-start",
    padding: "12px 18px",
    border: "none",
    cursor: "pointer",
    borderRadius: 4,
    background: "#f1c34a",
    color: "#111",
    fontWeight: 700,
  },
  status: {
    border: "1px solid",
    padding: 10,
    fontSize: 13,
    background: "rgba(255,255,255,0.04)",
  },
};