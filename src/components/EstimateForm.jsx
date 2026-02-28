import { useState } from "react";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function EstimateForm({ serviceName = "Estimate" }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function update(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.firstName.trim()) return "First name is required.";
    if (!form.lastName.trim()) return "Last name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!form.phone.trim()) return "Phone number is required.";
    if (!form.message.trim()) return "Please tell us what you need help with.";
    return "";
  }

  async function onSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }

    // TODO: Replace with real email/API later
    setStatus({ type: "success", message: "Request sent! We'll reach out soon." });
    setForm(initial);
  }

  return (
    <section style={styles.card} aria-label="Get a free estimate">
      <div style={styles.titleWrap}>
        <div style={styles.kicker}>GET A FREE ESTIMATE</div>
        <div style={styles.serviceName}>{serviceName}</div>
      </div>

      <form onSubmit={onSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.field}>
            <label style={styles.label}>First Name <span style={styles.req}>(required)</span></label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={update}
              style={styles.input}
              autoComplete="given-name"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Last Name <span style={styles.req}>(required)</span></label>
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
          <label style={styles.label}>Email <span style={styles.req}>(required)</span></label>
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
          <label style={styles.label}>Phone Number <span style={styles.req}>(required)</span></label>
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
          <label style={styles.label}>What can we help you with? <span style={styles.req}>(required)</span></label>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            style={styles.textarea}
            rows={4}
          />
        </div>

        {status.type !== "idle" && (
          <div
            style={{
              ...styles.status,
              borderColor: status.type === "error" ? "#ff4d4d" : "#3ddc84",
            }}
          >
            {status.message}
          </div>
        )}

        <button type="submit" style={styles.button}>
          Request Estimate
        </button>
      </form>
    </section>
  );
}

const styles = {
  card: {
    background: "#1f1f1f",
    color: "white",
    padding: 18,
    borderRadius: 6,
  },
  titleWrap: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 12,
  },
  kicker: {
    fontSize: 12,
    letterSpacing: 1.2,
    opacity: 0.85,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 700,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  label: { fontSize: 12, opacity: 0.9 },
  req: { fontSize: 11, opacity: 0.7 },
  input: {
    padding: "10px 10px",
    borderRadius: 4,
    border: "1px solid #444",
    background: "#e9e9e9",
    color: "#111",
    outline: "none",
  },
  textarea: {
    padding: "10px 10px",
    borderRadius: 4,
    border: "1px solid #444",
    background: "#e9e9e9",
    color: "#111",
    outline: "none",
    resize: "vertical",
  },
  button: {
    marginTop: 4,
    padding: "10px 12px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    background: "#d12020",
    color: "white",
    fontWeight: 700,
  },
  status: {
    border: "1px solid",
    padding: 10,
    borderRadius: 6,
    fontSize: 13,
    background: "rgba(255,255,255,0.04)",
  },
};