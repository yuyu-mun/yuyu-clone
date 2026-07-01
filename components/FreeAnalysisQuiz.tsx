"use client";

import { useMemo, useState } from "react";
import { ArrowIcon, WhatsAppIcon } from "@/components/Icons";
import { company } from "@/lib/site";

const N8N_URL = "https://ycmyn8n.zeabur.app/webhook/yuyu-quiz-en";

type AnswerValue = string | string[];
type Answers = Record<string, AnswerValue>;

type QuizOption = {
  key: string;
  label: string;
  other?: boolean;
};

type QuizStep = {
  id: string;
  part: string;
  question: string;
  hint?: string;
  kind: "single" | "multi" | "text" | "textarea";
  options?: QuizOption[];
  max?: number;
  placeholder?: string;
  optional?: boolean;
  condition?: (answers: Answers) => boolean;
};

const quizSteps: QuizStep[] = [
  {
    id: "q1",
    part: "Part 1: About You",
    question: "What industry are you in?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "F&B / Food" },
      { key: "B", label: "Retail / E-commerce" },
      { key: "C", label: "Beauty / Hair / Nails" },
      { key: "D", label: "Property / Construction / Renovation" },
      { key: "E", label: "Education / Training" },
      { key: "F", label: "Medical / Health / Wellness" },
      { key: "G", label: "Legal / Accounting / Finance" },
      { key: "H", label: "Automotive / Motorcycles" },
      { key: "I", label: "Tech / Software / IT Services" },
      { key: "J", label: "Others", other: true },
    ],
  },
  {
    id: "q2",
    part: "Part 1: About You",
    question: "How long have you been in this industry?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "1-3 years" },
      { key: "B", label: "3-5 years" },
      { key: "C", label: "5-10 years" },
      { key: "D", label: "10 years and above" },
    ],
  },
  {
    id: "q3",
    part: "Part 1: About You",
    question: "What is your company name and main product or service?",
    hint: "A short description is enough.",
    kind: "textarea",
    placeholder: "Example: I run a renovation company for residential and commercial spaces in KL.",
  },
  {
    id: "q4",
    part: "Part 1: About You",
    question: "What do you think is your customers' first impression of you?",
    hint: "Pick up to 3.",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "Professional and reliable" },
      { key: "B", label: "Friendly and easy to talk to" },
      { key: "C", label: "Affordable pricing" },
      { key: "D", label: "Really good quality" },
      { key: "E", label: "Experienced and established" },
      { key: "F", label: "Innovative and keeps up with trends" },
      { key: "G", label: "Genuine and straightforward" },
      { key: "H", label: "Has that personal charm" },
    ],
  },
  {
    id: "q5",
    part: "Part 2: About Your Customers",
    question: "What type of customer do you most want to serve?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "People with money but no time to research" },
      { key: "B", label: "Budget-conscious consumers who want the best value" },
      { key: "C", label: "People who care about quality and will pay more for it" },
      { key: "D", label: "Newcomers who do not know much yet" },
      { key: "E", label: "Business clients within the same industry" },
      { key: "F", label: "Others", other: true },
    ],
  },
  {
    id: "q6",
    part: "Part 2: About Your Customers",
    question: "Before customers found you, what was the biggest problem they were facing?",
    hint: "Pick up to 3.",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "They did not know how to choose and feared making the wrong call" },
      { key: "B", label: "They had been burned or cheated before" },
      { key: "C", label: "Market pricing felt unclear" },
      { key: "D", label: "They could not find someone they trusted" },
      { key: "E", label: "They did not understand the technical side" },
      { key: "F", label: "They had limited budget and feared wasting money" },
      { key: "G", label: "They tried others before but were not satisfied" },
    ],
  },
  {
    id: "q7",
    part: "Part 2: About Your Customers",
    question: "Why do customers usually choose you over someone else?",
    hint: "Pick up to 2.",
    kind: "multi",
    max: 2,
    options: [
      { key: "A", label: "My expertise is stronger" },
      { key: "B", label: "My pricing is more competitive" },
      { key: "C", label: "Good word of mouth and referrals" },
      { key: "D", label: "I am genuine and do not hard sell" },
      { key: "E", label: "My service is more comprehensive" },
      { key: "F", label: "I have success stories and samples to show" },
      { key: "G", label: "Customers trust me after one conversation" },
    ],
  },
  {
    id: "q8",
    part: "Part 3: About Short Videos",
    question: "Are you currently running any social media?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Yes, very active and posting every week" },
      { key: "B", label: "Yes, but I rarely update" },
      { key: "C", label: "I have an account but barely use it" },
      { key: "D", label: "None at all" },
    ],
  },
  {
    id: "q8a",
    part: "Part 3: About Short Videos",
    question: "What is your social media ID?",
    hint: "Optional.",
    kind: "text",
    optional: true,
    placeholder: "Example: @yuyu_creative",
    condition: (answers) => {
      const social = String(answers.q8 || "");
      return Boolean(social) && !social.startsWith("D.");
    },
  },
  {
    id: "q9",
    part: "Part 3: About Short Videos",
    question: "If you had to film today, which topic would you feel most confident talking about?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Behind-the-scenes knowledge in my industry" },
      { key: "B", label: "Questions my customers ask all the time" },
      { key: "C", label: "My founder journey or personal story" },
      { key: "D", label: "How to choose the right product or service" },
      { key: "E", label: "In-depth knowledge about what I sell" },
      { key: "F", label: "I have no idea yet" },
    ],
  },
  {
    id: "q10",
    part: "Part 3: About Short Videos",
    question: "What do you most want short videos to help you achieve?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Get more people to know my brand" },
      { key: "B", label: "Build my professional reputation" },
      { key: "C", label: "Bring in customers without relying only on ads" },
      { key: "D", label: "Build more trust with existing customers" },
      { key: "E", label: "All of the above" },
    ],
  },
  {
    id: "q11",
    part: "Part 4: Where You Are Now",
    question: "Are your competitors or industry peers already doing short videos?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Yes, and they are doing well" },
      { key: "B", label: "Yes, but the content looks average" },
      { key: "C", label: "A few have started trying" },
      { key: "D", label: "I have not seen any yet" },
      { key: "E", label: "I am not sure" },
    ],
  },
  {
    id: "q12",
    part: "Part 4: Where You Are Now",
    question: "Why do you want to start doing short videos?",
    hint: "Pick up to 3.",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "Competitors are doing it and I do not want to fall behind" },
      { key: "B", label: "Ads are getting more expensive" },
      { key: "C", label: "I want to build my personal brand and image" },
      { key: "D", label: "I want customers to come to me on their own" },
      { key: "E", label: "I want a content asset, not just ads" },
      { key: "F", label: "A friend or customer told me I should start" },
      { key: "G", label: "I am curious and want to find out more" },
    ],
  },
  {
    id: "q13",
    part: "Part 4: Where You Are Now",
    question: "What has been holding you back from starting until now?",
    hint: "Pick up to 3.",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "I do not know what content to make" },
      { key: "B", label: "I am not comfortable on camera" },
      { key: "C", label: "I have no time to film and edit" },
      { key: "D", label: "I cannot find a reliable team" },
      { key: "E", label: "I am not sure short videos work for my industry" },
      { key: "F", label: "It feels too expensive" },
      { key: "G", label: "I tried before but did not get good results" },
      { key: "H", label: "I am ready and looking for the right partner" },
    ],
  },
  {
    id: "q14",
    part: "Part 4: Where You Are Now",
    question: "If you were to start, what is your rough monthly budget?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Below RM3,000" },
      { key: "B", label: "RM3,000 - RM5,000" },
      { key: "C", label: "RM5,000 - RM10,000" },
      { key: "D", label: "RM10,000 and above" },
      { key: "E", label: "No idea yet, I want to understand first" },
    ],
  },
  {
    id: "name",
    part: "Almost There",
    question: "What should we call you?",
    hint: "Your first name or nickname is enough.",
    kind: "text",
    placeholder: "Example: Danny, Kelly, Aaron",
  },
  {
    id: "whatsapp",
    part: "Last Step",
    question: "What is your WhatsApp number?",
    hint: "Your analysis will be sent here within 24 hours.",
    kind: "text",
    placeholder: "Example: 0123456789",
  },
];

const payloadKeys = [
  "q1",
  "q2",
  "q3",
  "q4",
  "q5",
  "q6",
  "q7",
  "q8",
  "q8a",
  "q9",
  "q10",
  "q11",
  "q12",
  "q13",
  "q14",
  "name",
  "whatsapp",
];

function optionValue(option: QuizOption) {
  return `${option.key}. ${option.label}`;
}

function textAnswer(value: AnswerValue | undefined) {
  return typeof value === "string" ? value : "";
}

function listAnswer(value: AnswerValue | undefined) {
  return Array.isArray(value) ? value : [];
}

function formatAnswer(value: AnswerValue | undefined) {
  if (Array.isArray(value)) return value.join(" | ");
  return value || "";
}

function normalizeMalaysianPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  let normalized = digits;

  if (digits.startsWith("60")) normalized = digits;
  else if (digits.startsWith("0")) normalized = `6${digits}`;
  else if (digits.startsWith("1")) normalized = `60${digits}`;
  else return null;

  return /^601[0-9]{8,9}$/.test(normalized) ? normalized : null;
}

const stageItems = [
  { label: "About you", ids: ["q1", "q2", "q3", "q4"] },
  { label: "Customers", ids: ["q5", "q6", "q7"] },
  { label: "Short videos", ids: ["q8", "q8a", "q9", "q10"] },
  { label: "Now", ids: ["q11", "q12", "q13", "q14"] },
  { label: "Contact", ids: ["name", "whatsapp"] },
];

export default function FreeAnalysisQuiz() {
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [limitMessage, setLimitMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const steps = useMemo(
    () => quizSteps.filter((step) => !step.condition || step.condition(answers)),
    [answers],
  );
  const currentStep = steps[stepIndex] || steps[steps.length - 1];
  const quizQuestionCount = steps.filter((step) => step.id.startsWith("q") && step.id !== "q8a").length;
  const activeQuizPosition = currentStep.id.startsWith("q") && currentStep.id !== "q8a"
    ? steps.filter((step) => step.id.startsWith("q") && step.id !== "q8a").findIndex((step) => step.id === currentStep.id) + 1
    : null;
  const progress = success ? 100 : Math.round(((stepIndex + (started ? 1 : 0)) / steps.length) * 100);
  const activeStage = stageItems.find((stage) => stage.ids.includes(currentStep?.id))?.label || "Start";
  const selectedCount = currentStep?.kind === "multi" ? listAnswer(answers[currentStep.id]).length : 0;

  function hasAnswer(step: QuizStep) {
    if (step.optional) return true;
    if (step.kind === "multi") return listAnswer(answers[step.id]).length > 0;
    return textAnswer(answers[step.id]).trim().length > 0;
  }

  function chooseSingle(step: QuizStep, option: QuizOption) {
    const value = optionValue(option);
    setLimitMessage("");
    setPhoneError("");
    setAnswers((prev) => {
      const next = { ...prev, [step.id]: option.other ? "" : value };
      if (step.id === "q8" && value.startsWith("D.")) delete next.q8a;
      if (option.other) {
        next[`${step.id}Other`] = "";
        next[`${step.id}OtherActive`] = "true";
      } else {
        delete next[`${step.id}Other`];
        delete next[`${step.id}OtherActive`];
      }
      return next;
    });
  }

  function chooseMulti(step: QuizStep, option: QuizOption) {
    const value = optionValue(option);
    const selected = listAnswer(answers[step.id]);
    const max = step.max || 1;

    setPhoneError("");
    if (selected.includes(value)) {
      setLimitMessage("");
      setAnswers((prev) => ({
        ...prev,
        [step.id]: listAnswer(prev[step.id]).filter((item) => item !== value),
      }));
      return;
    }

    if (selected.length >= max) {
      setLimitMessage(`You can select up to ${max}.`);
      return;
    }

    setLimitMessage("");
    setAnswers((prev) => ({
      ...prev,
      [step.id]: [...listAnswer(prev[step.id]), value],
    }));
  }

  function setText(step: QuizStep, value: string) {
    setPhoneError("");
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
  }

  function setOtherText(step: QuizStep, value: string) {
    setLimitMessage("");
    setPhoneError("");
    setAnswers((prev) => ({
      ...prev,
      [`${step.id}Other`]: value,
      [`${step.id}OtherActive`]: "true",
      [step.id]: value.trim() ? `Others: ${value.trim()}` : "",
    }));
  }

  function goNext() {
    if (!currentStep || !hasAnswer(currentStep)) return;
    setLimitMessage("");
    setPhoneError("");
    setStepIndex((index) => Math.min(index + 1, steps.length - 1));
  }

  function goBack() {
    setLimitMessage("");
    setPhoneError("");
    setStepIndex((index) => Math.max(index - 1, 0));
  }

  async function submitQuiz() {
    if (!currentStep || !hasAnswer(currentStep)) return;

    const normalizedPhone = normalizeMalaysianPhone(textAnswer(answers.whatsapp));
    if (!normalizedPhone) {
      setPhoneError("Please enter a valid Malaysian phone number, such as 0123456789 or 60123456789.");
      return;
    }

    const payload = payloadKeys.reduce<Record<string, string>>((acc, key) => {
      acc[key] = key === "whatsapp" ? normalizedPhone : formatAnswer(answers[key]);
      return acc;
    }, {});
    payload.source = "yuyu-clone/freeanalysis";
    payload.submittedAt = new Date().toISOString();

    setSubmitting(true);
    try {
      await fetch(N8N_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.warn("Quiz submission failed", error);
    } finally {
      setSubmitting(false);
      setSuccess(true);
    }
  }

  function onPrimaryAction() {
    if (!started) {
      startQuiz();
      return;
    }

    if (stepIndex >= steps.length - 1) {
      void submitQuiz();
      return;
    }

    goNext();
  }

  function startQuiz() {
    setStarted(true);
    window.setTimeout(() => {
      document.getElementById("analysis-quiz")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 0);
  }

  const canContinue = currentStep ? hasAnswer(currentStep) && !submitting : false;
  const selectedOther = currentStep?.options?.some(
    (option) => option.other && textAnswer(answers[`${currentStep.id}OtherActive`]) === "true",
  );
  const whatsAppHref = `https://api.whatsapp.com/send/?phone=${company.whatsapp}&text=${encodeURIComponent(
    "Hi! I just completed the short video identity quiz and would love to find out more.",
  )}`;

  return (
    <section className="analysis-page">
      <div className="analysis-shell">
        <aside className="analysis-brief">
          <div className="analysis-brand">
            <img src="/images/logo-white-horizontal.png" alt="Yuyu Creative" />
            <span>Short video identity quiz</span>
          </div>

          <div className="analysis-copy">
            <span className="analysis-kicker">Free Persona Analysis</span>
            <h1>Find the creator angle your customers should remember.</h1>
            <p>
              A guided 5-minute quiz for Malaysian clients and brands. We use your answers to map
              your strengths, audience angle, and first short-video direction.
            </p>
          </div>

          <div className="analysis-proof" aria-label="Quiz details">
            <span><strong>14</strong> questions</span>
            <span><strong>5 min</strong> average time</span>
            <span><strong>RM0</strong> cost</span>
          </div>

          <div className="analysis-path" aria-label="How it works">
            <div><span>01</span><p>Answer focused questions about your business and customers.</p></div>
            <div><span>02</span><p>We map your short-video identity and strongest content angles.</p></div>
            <div><span>03</span><p>Your analysis is delivered through WhatsApp within 24 hours.</p></div>
          </div>

          <figure className="analysis-photo">
            <img src="/images/generated-strategy-workshop.png" alt="Yuyu Creative strategy workshop" />
          </figure>
        </aside>

        <div className="analysis-quiz-panel" id="analysis-quiz" aria-live="polite">
          <div className="analysis-panel-head">
            <div>
              <span className="analysis-step-label">{success ? "Complete" : started ? activeStage : "Start"}</span>
              <strong>{success ? "Analysis request received" : started ? `${progress}% complete` : "Get Free Analysis"}</strong>
            </div>
            <span className="analysis-time">About 5 min</span>
          </div>

          <div className="analysis-progress" aria-hidden>
            <span style={{ width: `${started || success ? progress : 0}%` }} />
          </div>

          <div className="analysis-stage-list" aria-label="Quiz sections">
            {stageItems.map((stage) => (
              <span className={stage.label === activeStage ? "is-active" : ""} key={stage.label}>
                {stage.label}
              </span>
            ))}
          </div>

          {!started && !success && (
            <div className="analysis-start">
              <span className="analysis-step-label">Start Here</span>
              <h2>Get a sharper short-video starting point before you spend on content.</h2>
              <p>
                One question at a time. No email wall. No generic template. Your WhatsApp number is
                only collected at the end so we can send the analysis.
              </p>
              <button type="button" className="analysis-next" onClick={onPrimaryAction}>
                Start quiz
                <ArrowIcon />
              </button>
            </div>
          )}

          {started && !success && currentStep && (
            <div className="analysis-question-wrap">
              <div className="analysis-question-meta">
                <span className="analysis-step-label">{currentStep.part}</span>
                {activeQuizPosition ? (
                  <span>
                    Question {activeQuizPosition} of {quizQuestionCount}
                  </span>
                ) : (
                  <span>Contact detail</span>
                )}
              </div>

              <h2>{currentStep.question}</h2>
              <div className="analysis-hint-row">
                {currentStep.hint && <p className="analysis-hint">{currentStep.hint}</p>}
                {currentStep.kind === "multi" && (
                  <span>
                    {selectedCount} / {currentStep.max} selected
                  </span>
                )}
              </div>

              {(currentStep.kind === "single" || currentStep.kind === "multi") && currentStep.options && (
                <div className="analysis-options">
                  {currentStep.options.map((option) => {
                    const value = optionValue(option);
                    const selected = currentStep.kind === "multi"
                      ? listAnswer(answers[currentStep.id]).includes(value)
                      : option.other
                        ? textAnswer(answers[`${currentStep.id}OtherActive`]) === "true"
                        : textAnswer(answers[currentStep.id]) === value;

                    return (
                      <button
                        key={value}
                        type="button"
                        className={`analysis-option${selected ? " selected" : ""}`}
                        onClick={() => currentStep.kind === "multi" ? chooseMulti(currentStep, option) : chooseSingle(currentStep, option)}
                        aria-pressed={selected}
                      >
                        <span>{option.key}</span>
                        <strong>{option.label}</strong>
                      </button>
                    );
                  })}
                </div>
              )}

              {selectedOther && (
                <div className="analysis-field">
                  <label className="analysis-field-label" htmlFor={`${currentStep.id}-other`}>
                    {currentStep.id === "q1" ? "Your industry" : "Your customer type"}
                  </label>
                  <input
                    id={`${currentStep.id}-other`}
                    className="analysis-input"
                    type="text"
                    value={textAnswer(answers[`${currentStep.id}Other`])}
                    onChange={(event) => setOtherText(currentStep, event.target.value)}
                    placeholder={currentStep.id === "q1" ? "Example: Event planning" : "Example: Parents buying for kids"}
                    autoFocus
                  />
                </div>
              )}

              {currentStep.kind === "text" && (
                <div className="analysis-field">
                  <label className="analysis-field-label" htmlFor={`${currentStep.id}-field`}>
                    {currentStep.id === "whatsapp" ? "Malaysian WhatsApp number" : "Your answer"}
                  </label>
                  <input
                    id={`${currentStep.id}-field`}
                    className="analysis-input"
                    type={currentStep.id === "whatsapp" ? "tel" : "text"}
                    value={textAnswer(answers[currentStep.id])}
                    placeholder={currentStep.placeholder}
                    onChange={(event) => setText(currentStep, event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && hasAnswer(currentStep)) {
                        stepIndex >= steps.length - 1 ? void submitQuiz() : goNext();
                      }
                    }}
                  />
                </div>
              )}

              {currentStep.kind === "textarea" && (
                <div className="analysis-field">
                  <label className="analysis-field-label" htmlFor={`${currentStep.id}-field`}>
                    Business and offer
                  </label>
                  <textarea
                    id={`${currentStep.id}-field`}
                    className="analysis-textarea"
                    value={textAnswer(answers[currentStep.id])}
                    placeholder={currentStep.placeholder}
                    onChange={(event) => setText(currentStep, event.target.value)}
                  />
                </div>
              )}

              {limitMessage && <p className="analysis-error">{limitMessage}</p>}
              {phoneError && <p className="analysis-error">{phoneError}</p>}

              <div className="analysis-nav">
                <button type="button" className="analysis-back" onClick={goBack} disabled={stepIndex === 0 || submitting}>
                  Back
                </button>
                {currentStep.optional && (
                  <button type="button" className="analysis-skip" onClick={goNext}>
                    Skip
                  </button>
                )}
                <button type="button" className="analysis-next" onClick={onPrimaryAction} disabled={!canContinue}>
                  {submitting ? "Submitting..." : stepIndex >= steps.length - 1 ? "Get My Analysis" : "Continue"}
                  {!submitting && <ArrowIcon />}
                </button>
              </div>
            </div>
          )}

          {success && (
            <div className="analysis-success">
              <span className="analysis-check">OK</span>
              <h2>Quiz submitted.</h2>
              <p>
                {textAnswer(answers.name) ? `${textAnswer(answers.name)}, your` : "Your"} short video identity
                analysis is being generated. Yuyu Creative will send it to your WhatsApp within 24 hours.
              </p>
              <div className="analysis-success-steps">
                <span>Answers received</span>
                <span>Identity mapped</span>
                <span>Report sent</span>
              </div>
              <a href={whatsAppHref} className="analysis-main-cta" target="_blank" rel="noreferrer">
                Open WhatsApp
                <WhatsAppIcon />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
