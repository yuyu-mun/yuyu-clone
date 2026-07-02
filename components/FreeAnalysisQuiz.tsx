"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

export default function FreeAnalysisQuiz() {
  const [started, setStarted] = useState(false);
  const [starting, setStarting] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [answerFeedback, setAnswerFeedback] = useState("");
  const [limitMessage, setLimitMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const questionWrapRef = useRef<HTMLDivElement>(null);
  const advanceTimer = useRef<number | null>(null);

  const steps = useMemo(
    () => quizSteps.filter((step) => !step.condition || step.condition(answers)),
    [answers],
  );
  const currentStep = steps[stepIndex] || steps[steps.length - 1];
  const quizQuestionCount = steps.filter((step) => step.id.startsWith("q") && step.id !== "q8a").length;
  const activeQuizPosition = currentStep.id.startsWith("q") && currentStep.id !== "q8a"
    ? steps.filter((step) => step.id.startsWith("q") && step.id !== "q8a").findIndex((step) => step.id === currentStep.id) + 1
    : null;
  const progress = !started ? 0 : success ? 100 : Math.round(((stepIndex + 1) / steps.length) * 100);
  const selectedCount = currentStep?.kind === "multi" ? listAnswer(answers[currentStep.id]).length : 0;
  const canContinue = currentStep ? hasAnswer(currentStep) && !submitting : false;
  const isLastStep = stepIndex >= steps.length - 1;
  const partLabel = currentStep?.part ?? "";

  function clearAdvanceTimer() {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }

  function updateScrollHint() {
    const el = questionWrapRef.current;
    if (!el) {
      setShowScrollHint(false);
      return;
    }
    setShowScrollHint(el.scrollHeight - el.scrollTop - el.clientHeight > 6);
  }

  useEffect(() => {
    setAnswerFeedback("");
    clearAdvanceTimer();
    window.setTimeout(() => {
      questionWrapRef.current?.scrollTo({ top: 0 });
      updateScrollHint();
    }, 0);
    return clearAdvanceTimer;
  }, [currentStep?.id, started]);

  useEffect(() => {
    window.addEventListener("resize", updateScrollHint);
    return () => window.removeEventListener("resize", updateScrollHint);
  }, []);

  function hasAnswer(step: QuizStep) {
    if (step.optional) return true;
    if (step.kind === "multi") return listAnswer(answers[step.id]).length > 0;
    return textAnswer(answers[step.id]).trim().length > 0;
  }

  function scrollQuestionToBottom() {
    window.setTimeout(() => {
      const panel = questionWrapRef.current;
      panel?.scrollTo({ top: panel.scrollHeight, behavior: "smooth" });
      window.setTimeout(updateScrollHint, 360);
    }, 80);
  }

  function showAnswerFeedback(message: string) {
    setAnswerFeedback(message);
    scrollQuestionToBottom();
  }

  function chooseSingle(step: QuizStep, option: QuizOption) {
    const value = optionValue(option);
    setLimitMessage("");
    setPhoneError("");
    clearAdvanceTimer();
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

    if (option.other) {
      showAnswerFeedback("Type it below");
      return;
    }

    // Quizizz-style auto-advance: let the tap land, then glide to the next question.
    showAnswerFeedback("Nice!");
    if (!isLastStep) {
      advanceTimer.current = window.setTimeout(() => {
        setStepIndex((index) => Math.min(index + 1, steps.length - 1));
      }, 480);
    }
  }

  function chooseMulti(step: QuizStep, option: QuizOption) {
    const value = optionValue(option);
    const max = step.max || 1;
    const selected = listAnswer(answers[step.id]);
    setPhoneError("");

    if (selected.includes(value)) {
      setLimitMessage("");
      setAnswers((prev) => ({
        ...prev,
        [step.id]: listAnswer(prev[step.id]).filter((item) => item !== value),
      }));
      showAnswerFeedback("Updated");
      return;
    }

    if (selected.length >= max) {
      setLimitMessage(`Pick up to ${max} — tap one to swap.`);
      showAnswerFeedback("Limit reached");
      return;
    }

    setLimitMessage("");
    // Hard cap inside the updater so back-to-back taps can never exceed `max`.
    setAnswers((prev) => {
      const current = listAnswer(prev[step.id]);
      if (current.includes(value) || current.length >= max) return prev;
      return { ...prev, [step.id]: [...current, value] };
    });
    showAnswerFeedback(`${selected.length + 1}/${max} picked`);
  }

  function setText(step: QuizStep, value: string) {
    setPhoneError("");
    setAnswerFeedback(value.trim() ? "Ready" : "");
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
  }

  function setOtherText(step: QuizStep, value: string) {
    setLimitMessage("");
    setPhoneError("");
    setAnswerFeedback(value.trim() ? "Ready" : "Type it below");
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
    setAnswerFeedback("");
    clearAdvanceTimer();
    setStepIndex((index) => Math.min(index + 1, steps.length - 1));
  }

  function goBack() {
    setLimitMessage("");
    setPhoneError("");
    setAnswerFeedback("");
    clearAdvanceTimer();
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
    payload.source = "yuyu-clone/claim-offer";
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
      if (starting) return;
      setStarting(true);
      window.setTimeout(() => {
        setStarted(true);
        setStarting(false);
      }, 560);
      return;
    }

    if (stepIndex >= steps.length - 1) {
      void submitQuiz();
      return;
    }

    goNext();
  }
  const selectedOther = currentStep?.options?.some(
    (option) => option.other && textAnswer(answers[`${currentStep.id}OtherActive`]) === "true",
  );
  const whatsAppHref = `https://api.whatsapp.com/send/?phone=${company.whatsapp}&text=${encodeURIComponent(
    "Hi! I just submitted the claim offer form and would like to follow up.",
  )}`;

  return (
    <section className="qz-page">
      <div className="qz-ambient" aria-hidden="true">
        <span className="qz-blob b1" />
        <span className="qz-blob b2" />
        <span className="qz-blob b3" />
        <span className="qz-grid" />
      </div>

      <div className="qz-shell">
        <div
          className={`qz-panel${started && !success ? " is-playing" : ""}${success ? " is-done" : ""}`}
          id="analysis-quiz"
          aria-live="polite"
        >
          {/* ---------- Intro ---------- */}
          {!started && !success && (
            <div className={`qz-intro${starting ? " is-starting" : ""}`} key="intro">
              <span className="qz-fx blob1" aria-hidden="true" />
              <span className="qz-fx blob2" aria-hidden="true" />
              <span className="qz-fx blob3" aria-hidden="true" />
              <span className="qz-fx beam" aria-hidden="true" />

              <div className="qz-intro-inner">
                <img className="qz-intro-logo" src="/images/logo-black-horizontal.png" alt="Yuyu Creative" />

                <h1 className="qz-intro-title">
                  {["Free", "Brand"].map((w, i) => (
                    <span className="qz-word" style={{ ["--w" as string]: i }} key={w}>{w}</span>
                  ))}
                  <span className="qz-hl">
                    <span className="qz-word" style={{ ["--w" as string]: 2 }}>Analysis</span>
                  </span>
                </h1>

                <p className="qz-intro-desc">Short-video strategy, tailored to your brand.</p>

                <button
                  type="button"
                  className="qz-orb"
                  onClick={onPrimaryAction}
                  disabled={starting}
                  aria-label="Start the free analysis"
                >
                  <svg className="qz-orb-ring" viewBox="0 0 220 220" aria-hidden="true">
                    <defs>
                      <path id="qzCirclePath" d="M110,110 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" />
                    </defs>
                    <text textLength="527" lengthAdjust="spacing">
                      <textPath href="#qzCirclePath" startOffset="0">
                        KNOW WHAT TO POST · SHORT-VIDEO STRATEGY ·
                      </textPath>
                    </text>
                  </svg>
                  <span className="qz-orb-core">
                    <span className="qz-orb-label">{starting ? "Loading" : "Start"}</span>
                    <span className="qz-orb-arrow" aria-hidden="true"><ArrowIcon /></span>
                  </span>
                </button>

                <p className="qz-intro-meta">
                  <b>14</b> questions · <b>5</b> min · reply within <b>24h</b>
                </p>
              </div>
            </div>
          )}

          {/* ---------- Playing ---------- */}
          {started && !success && currentStep && (
            <>
              <div className="qz-topbar">
                <span className="qz-topbar-part">{partLabel}</span>
                <span className="qz-topbar-count">
                  {activeQuizPosition ? `Question ${activeQuizPosition} of ${quizQuestionCount}` : "Almost done"}
                </span>
              </div>
              <div className="qz-progress" aria-hidden="true">
                <span style={{ width: `${progress}%` }} />
              </div>

              <div className="qz-stage">
                <div className="qz-scrollwrap">
                <div className="qz-question" key={currentStep.id} ref={questionWrapRef} onScroll={updateScrollHint}>
                  <h2 className="qz-q-title">{currentStep.question}</h2>
                  <div className="qz-q-sub">
                    {currentStep.hint && <p className="qz-hint">{currentStep.hint}</p>}
                    {currentStep.kind === "multi" && (
                      <span className="qz-count-pill">
                        {selectedCount} / {currentStep.max}
                      </span>
                    )}
                  </div>

                  {(currentStep.kind === "single" || currentStep.kind === "multi") && currentStep.options && (
                    <div className={`qz-options${currentStep.options.length > 6 ? " is-dense" : ""}`}>
                      {currentStep.options.map((option, i) => {
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
                            className={`qz-option${selected ? " selected" : ""}`}
                            style={{ ["--i" as string]: i }}
                            onClick={() => currentStep.kind === "multi" ? chooseMulti(currentStep, option) : chooseSingle(currentStep, option)}
                            aria-pressed={selected}
                          >
                            <span className="qz-option-badge" aria-hidden="true">{option.key}</span>
                            <strong className="qz-option-label">{option.label}</strong>
                            <span className="qz-option-tick" aria-hidden="true">✓</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {selectedOther && (
                    <div className="qz-field">
                      <label className="qz-field-label" htmlFor={`${currentStep.id}-other`}>
                        {currentStep.id === "q1" ? "Your industry" : "Your customer type"}
                      </label>
                      <input
                        id={`${currentStep.id}-other`}
                        className="qz-input"
                        type="text"
                        value={textAnswer(answers[`${currentStep.id}Other`])}
                        onChange={(event) => setOtherText(currentStep, event.target.value)}
                        placeholder={currentStep.id === "q1" ? "Example: Event planning" : "Example: Parents buying for kids"}
                        autoFocus
                      />
                    </div>
                  )}

                  {currentStep.kind === "text" && (
                    <div className="qz-field">
                      <label className="qz-field-label" htmlFor={`${currentStep.id}-field`}>
                        {currentStep.id === "whatsapp" ? "Malaysian WhatsApp number" : "Your answer"}
                      </label>
                      <input
                        id={`${currentStep.id}-field`}
                        className="qz-input"
                        type={currentStep.id === "whatsapp" ? "tel" : "text"}
                        value={textAnswer(answers[currentStep.id])}
                        placeholder={currentStep.placeholder}
                        onChange={(event) => setText(currentStep, event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" && hasAnswer(currentStep)) {
                            isLastStep ? void submitQuiz() : goNext();
                          }
                        }}
                        autoFocus
                      />
                    </div>
                  )}

                  {currentStep.kind === "textarea" && (
                    <div className="qz-field">
                      <label className="qz-field-label" htmlFor={`${currentStep.id}-field`}>
                        Business and offer
                      </label>
                      <textarea
                        id={`${currentStep.id}-field`}
                        className="qz-textarea"
                        value={textAnswer(answers[currentStep.id])}
                        placeholder={currentStep.placeholder}
                        onChange={(event) => setText(currentStep, event.target.value)}
                      />
                    </div>
                  )}

                  {limitMessage && <p className="qz-error">{limitMessage}</p>}
                  {phoneError && <p className="qz-error">{phoneError}</p>}
                </div>
                  <div className={`qz-scrollfade${showScrollHint ? " is-visible" : ""}`} aria-hidden="true" />
                </div>

                <div className="qz-nav">
                  {currentStep.optional && !hasAnswerText(answers, currentStep) && (
                    <button type="button" className="qz-skip" onClick={goNext}>
                      Skip
                    </button>
                  )}
                  <button type="button" className="qz-back" onClick={goBack} disabled={stepIndex === 0 || submitting}>
                    Back
                  </button>
                  <button type="button" className="qz-cta qz-next" onClick={onPrimaryAction} disabled={!canContinue}>
                    {submitting ? "Sending…" : isLastStep ? "Submit & claim offer" : "Continue"}
                    {!submitting && <ArrowIcon />}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ---------- Success ---------- */}
          {success && (
            <div className="qz-success" key="success">
              <span className="qz-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <h2>{textAnswer(answers.name) ? `Thank you, ${textAnswer(answers.name)}.` : "Thank you."}</h2>
              <p>Your answers are in. We&rsquo;re preparing your tailored short-video analysis and will reach out on WhatsApp within 24 hours.</p>
              <div className="qz-success-steps">
                <span className="is-done">Answers received</span>
                <span>Strategy reviewed</span>
                <span>WhatsApp follow-up</span>
              </div>
              <a href={whatsAppHref} className="qz-cta qz-success-cta" target="_blank" rel="noreferrer">
                Message us on WhatsApp
                <WhatsAppIcon />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function hasAnswerText(answers: Answers, step: QuizStep) {
  return textAnswer(answers[step.id]).trim().length > 0;
}
