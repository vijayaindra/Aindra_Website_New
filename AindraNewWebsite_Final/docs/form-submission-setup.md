# Form Submission Setup (EmailJS + Firestore)

This project now supports:
- Email delivery via EmailJS (primary)
- Data persistence via Firestore (optional, safe-mode enabled)

Forms covered:
- Contact enquiry form
- Product support form
- Careers application form

---

## 1) What You Need To Provide

### A) EmailJS (required for live email sending)
Fill these in `.env`:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_CONTACT_TEMPLATE_ID=
VITE_EMAILJS_SUPPORT_TEMPLATE_ID=
VITE_EMAILJS_CAREERS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

You must create:
- 1 EmailJS service
- 3 EmailJS templates:
  - Contact
  - Support
  - Careers

Email destination: `contactus@aindra.in`

---

### B) Firebase/Firestore (optional but recommended)
Fill these in `.env`:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_USE_FIREBASE_CONTENT=true
VITE_FIREBASE_STORAGE_BASE_PATH=public
```

If `VITE_USE_FIREBASE_CONTENT=false` or Firebase keys are missing:
- forms still work
- data is stored in local fallback mode
- EmailJS can still send emails independently

---

## 2) Firestore Collections Used

- `contactEnquiries`
- `productSupportEnquiries`
- `careerApplications`

Common metadata written:
- `createdAt`
- `status: "new"`
- `sourcePage: "contact"` or `"careers"`

---

## 3) EmailJS Template Variables To Configure

Use matching variable names in EmailJS templates.

### Contact template variables
- `to_email`
- `form_type`
- `full_name`
- `email`
- `phone`
- `company`
- `country`
- `user_type`
- `message`
- `submitted_at`

### Product support template variables
- `to_email`
- `form_type`
- `full_name`
- `email`
- `phone`
- `company`
- `country`
- `user_type`
- `device`
- `software_version`
- `issue_description`
- `attachment_file_name`
- `submitted_at`

### Careers template variables
- `to_email`
- `form_type`
- `first_name`
- `last_name`
- `email`
- `phone`
- `location`
- `gender`
- `linkedin_profile`
- `position_applying_for`
- `years_of_experience`
- `available_from`
- `motivation`
- `cv_file_name`
- `cover_letter_file_name`
- `submitted_at`

---

## 4) File Upload Note (Important)

Current UI captures only selected file names (`cv_file_name`, `cover_letter_file_name`, support attachment name).

Current behavior:
- File names are sent in email and persisted
- Actual binary files are **not** uploaded/sent by EmailJS

Best production path for real attachments:
- Upload files to Firebase Storage (or backend storage)
- Include generated secure file URL in Firestore + Email template variables

---

## 5) Local Run / Verification

1. Fill `.env` values.
2. Restart app:

```bash
npm run dev
```

3. Submit each form:
- `/#/contact` -> contact enquiry
- `/#/contact` -> product support
- `/#/careers` -> careers application

4. Verify:
- EmailJS dashboard shows successful sends
- Firestore documents appear (if enabled)
- If Firestore disabled, fallback entries are in localStorage

---

## 6) Troubleshooting

- Email not sent:
  - Check EmailJS IDs and public key in `.env`
  - Check template variable names exactly match
- Firestore not writing:
  - Verify Firebase keys and `VITE_USE_FIREBASE_CONTENT=true`
- No effect after env edits:
  - Restart dev server (Vite loads env at startup)

