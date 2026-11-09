import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november9Blog = [
  {
    "slug": "build-a-credit-balance-refund-queue-with-a-named-reviewer",
    "title": "Build a credit balance refund queue with a named reviewer",
    "service": "credit balance management",
    "description": "A credit balance refund routine for billing teams, with credit sorting, evidence checks, a named reviewer, a thirty-day decision clock, notice records, and a monthly reconciliation.",
    "details": {
      "overview": "A credit balance is money the practice does not owe, but it sits in the ledger like any other balance until someone reviews it. When refunds wait, patients call, payers audit, and the AR team learns to distrust its own totals. A refund queue fixes that by turning every credit into an item with an owner, evidence, and a decision date. The routine below keeps refunds moving without letting the team refund first and investigate later.",
      "sections": [
        {
          "heading": "Sort refunds from credits",
          "body": "A credit balance is not the same thing as a refund, and the queue should show the difference. The credit is the accounting condition; the refund is the decision to return money to a patient or payer. Sort the queue by credit source, such as an overpayment, a duplicate posting, a canceled service, or a contractual adjustment that posted twice. Each source has a different evidence trail, so mixing them makes the review slower and the audit weaker.\n\nStart with the largest credits and the oldest credits, then work down the list by age. A small credit that has sat for a year is often a bigger compliance problem than a large credit from last week. Keep patient credits and payer credits in separate columns even when they share a worklist. The separation lets the team apply the right notice rules and the right refund method without re-sorting the queue every morning."
        },
        {
          "heading": "Verify the credit before refunding",
          "body": "Pull the original payment, the remittance, and the posting history before approving any refund. Confirm that the payment cleared, that it was not reversed, and that the service was actually billed. A credit created by a temporary posting error can disappear when the error is corrected, and a refund issued too early turns into a collection problem. The reviewer should be able to point to the exact transaction that created the balance.\n\nCheck whether another payment is still expected for the same service. A secondary payer, a patient payment, or a supplemental plan may already be in transit and will erase the credit on its own. If the credit came from a payer, compare the allowed amount with the contract before deciding the payer overpaid. A refund based on a wrong fee schedule can be harder to recover than the original overpayment."
        },
        {
          "heading": "Give every refund a reviewer",
          "body": "Name one person who approves refunds and one backup who can approve when that person is out. The reviewer should not be the same person who posts the payment, because that removes the second look that catches most errors. Record the reviewer's name and the review date on the queue item, not only in an email thread. When an auditor asks why a refund was issued, the queue should answer without a search through old messages.\n\nSet a dollar threshold above which a second reviewer must sign off. The threshold can be modest, but it should be written and applied to every source. Below the threshold, the first reviewer still records the evidence and the reason for the refund. The point is not to slow small refunds down; it is to make sure no refund leaves without a traceable decision."
        },
        {
          "heading": "Set a thirty-day decision clock",
          "body": "Start the clock when the credit is identified, not when someone finally opens the file. Aim to decide every credit within thirty days, and flag anything that reaches twenty days as approaching the limit. The clock should include the time spent waiting for a payer response, because that wait is part of the process the practice controls. Report the count of items past the limit in the weekly AR review.\n\nSome credits legitimately take longer, such as a payer recovery that requires a formal request. Give those items a documented extension with a new date and the reason, rather than letting the original date silently pass. Review extensions monthly to see whether one payer or one process keeps causing delay. A clock that is enforced only on easy items teaches the team to avoid the hard ones."
        },
        {
          "heading": "Document the patient or payer notice",
          "body": "Write down how the patient or payer was told about the refund and when. For a patient credit, record the statement or letter that explained the balance and the refund method. For a payer credit, record the remittance note or the recovery request that supports the return. The notice is part of the evidence that the practice handled the money openly rather than keeping it until someone complained.\n\nKeep the notice template short and free of billing jargon. State the amount, the reason, the method, and the expected date, then give a phone number for questions. Save a copy of the sent notice with the queue item so the record is complete. If the patient asks for a different refund method, document the request and the practice's response rather than promising an option the practice cannot deliver."
        },
        {
          "heading": "Reconcile the refund log monthly",
          "body": "At month end, compare the refund log with the accounting system and the bank activity. Every refund on the log should match a payment out, and every payment out should have a queue item behind it. Investigate items that appear in one record but not the other before closing the month. This reconciliation catches duplicate refunds, missed postings, and refunds that were approved but never sent.\n\nReport the opening balance, new credits, refunds issued, credits cleared without a refund, and the closing balance. Add the number of items past the decision clock and the dollar value of those items. Share the summary with the billing lead and the finance owner, not only with the refund reviewer. A short monthly report keeps the queue from becoming a private worklist that no one else can see."
        }
      ],
      "heroImage": "/images/november-9/build-a-credit-balance-refund-queue-with-a-named-reviewer.webp",
      "readTime": "8 min read",
      "checklist": [
        "Separate patient credits from payer credits and group each by its source.",
        "Verify the original payment and contract rate before approving any refund.",
        "Name a refund reviewer, a backup, and a second sign-off threshold.",
        "Decide every credit within thirty days or record a dated extension.",
        "Reconcile the refund log to cash and bank activity each month."
      ]
    },
    "image": "/images/november-9/build-a-credit-balance-refund-queue-with-a-named-reviewer.webp",
    "published": "2026-11-09",
    "category": "blog"
  },
  {
    "slug": "set-a-month-end-billing-close-checklist-that-reconciles-before-it-reports",
    "title": "Set a month-end billing close checklist that reconciles before it reports",
    "service": "month-end close",
    "description": "A month-end billing close routine with a frozen reporting window, cash-to-posting reconciliation, suspense cleanup, adjustment review, sign-off, and a variance note for the next close.",
    "details": {
      "overview": "The month-end close is where the billing team proves that its numbers match the money. When the close is rushed, reports go out with unresolved cash, unexplained adjustments, and a suspense balance that everyone agrees to ignore. A written checklist slows the close in the right places so the team can trust the result. The routine below orders the work so reconciliation happens before reporting, not after someone questions a total.",
      "sections": [
        {
          "heading": "Freeze the reporting window",
          "body": "Choose a cut-off time on the last business day and write it on the close calendar. Work completed after the cut-off belongs to the next period, even if it feels urgent. Tell the team the cut-off in advance and stop accepting late posting requests without a documented exception. A firm window is the only way to compare one month with another.\n\nRecord the number of items that arrived after the cut-off and the reason for each exception. If late items are common, move the cut-off earlier or fix the upstream process that delivers them late. Do not quietly reopen the period for a favorite adjustment, because that teaches the team the calendar is optional. The close package should state the cut-off and the exception count so the reader knows what moved."
        },
        {
          "heading": "Reconcile cash to the posting batch",
          "body": "Match the bank deposit and the lockbox file to the posting batch before looking at any report. Use the same date basis on both sides and list every deposit that has not posted. A cash difference is easier to trace while the batch is fresh than after the ledger has been adjusted several times. The reconciliation should end with a named owner for each open item.\n\nSeparate a timing difference from a true variance. A deposit that clears on the first business day of the next month is a timing item, while a payment that posted to the wrong account is a correction. Write the classification beside each difference and attach the supporting document. The point is to close the month with a list the team understands, not a single unexplained total."
        },
        {
          "heading": "Clear the suspense accounts",
          "body": "List every item sitting in a suspense or unapplied cash account and give each one an owner and a date. Suspense balances grow when a payment cannot be matched to a claim, so the fix is often a missing identifier or a claim that was never built. Work the oldest items first and escalate anything that has crossed two closes. A suspense account with no aging report is a hiding place, not a control.\n\nSet a target for the closing suspense balance and report it beside the prior month. If the balance rises, explain whether volume increased or whether matching got worse. Do not move the balance to another account just to make the report look clean. Clearing suspense means matching the payment or documenting why it cannot be matched, not relabeling the problem."
        },
        {
          "heading": "Review the adjustment ledger",
          "body": "Pull every adjustment posted during the month and group it by reason code and owner. Look for clusters: one user, one payer, one code, or one day with an unusual volume. Ask for the supporting note on a sample of large and recurring adjustments. An adjustment without a reason is a decision that no one can defend later.\n\nCompare the adjustment total with the prior three months and with the collection target. A jump in contractual adjustments may reflect a fee schedule change, while a jump in bad debt may reflect a collection process problem. Send the explanation to the finance owner before the close package is finalized. The review should produce a short list of causes, not a longer list of transactions."
        },
        {
          "heading": "Sign off on the close package",
          "body": "Build a one-page cover sheet with the cash total, the posted total, the suspense balance, the adjustment total, and the open items. Add the preparer and the reviewer, each with a date and a signature. The reviewer should be able to trace every number on the cover sheet to a supporting report. If a number cannot be traced, it does not belong on the cover sheet.\n\nHold the sign-off until the open items have owners and dates. A known issue with a plan is acceptable; an unknown difference is not. Send the package to the finance owner and the operations lead at the same time so no one hears a different version. Keep the signed copy with the close file and reference it in the next month's opening note."
        },
        {
          "heading": "Keep a variance note for next month",
          "body": "Write half a page explaining the largest movements in cash, adjustments, and AR. Name the cause, the evidence, and whether the team expects it to repeat. A variance note written while the details are fresh saves hours at the next close. It also gives a new analyst a starting point instead of a stack of reports.\n\nAt the start of the next close, read the note before posting anything new. Check whether the expected movement happened and whether the earlier explanation still holds. Update the note with what changed and carry forward any unresolved cause. Over time the notes become a useful record of how the practice's revenue cycle actually behaves."
        }
      ],
      "heroImage": "/images/november-9/set-a-month-end-billing-close-checklist-that-reconciles-before-it-reports.webp",
      "readTime": "8 min read",
      "checklist": [
        "Publish a cut-off time and log every late item with its reason.",
        "Reconcile bank and lockbox cash to the posting batch before reporting.",
        "Assign every suspense item an owner and clear the oldest first.",
        "Review adjustments by reason, owner, payer, and month-over-month change.",
        "Sign the close package only when every number traces to a report."
      ]
    },
    "image": "/images/november-9/set-a-month-end-billing-close-checklist-that-reconciles-before-it-reports.webp",
    "published": "2026-11-09",
    "category": "blog"
  },
  {
    "slug": "run-a-secondary-claim-handoff-when-the-primary-payment-posts",
    "title": "Run a secondary claim handoff when the primary payment posts",
    "service": "secondary billing",
    "description": "A secondary claim routine for billing teams, with coordination-of-benefits signals, coverage order checks, primary determination carryover, attachment rules, filing deadlines, and payment reconciliation.",
    "details": {
      "overview": "A secondary claim begins where the primary remittance ends, and the handoff is where most of the delay and rework happens. The primary payment posts, the account looks settled, and the secondary balance waits until someone remembers it exists. A defined handoff turns that wait into a short, checkable step with an owner. The routine below keeps the coverage order, the primary determination, and the filing deadline together from the start.",
      "sections": [
        {
          "heading": "Watch the primary remittance for coordination signals",
          "body": "Read the primary remittance for the coordination-of-benefits code before closing the claim. A code that shows another payer is primary means the secondary claim may not be needed, while a code that shows the patient has other coverage means it probably is. Do not rely on the registration screen alone, because coverage changes after the visit. The remittance is the evidence that the payer itself recognized another plan.\n\nFlag any claim where the primary paid less than the allowed amount because of another plan. Route the flag to the secondary queue with the remittance attached, not to a general follow-up list. If the primary denied the service outright, check whether the secondary plan requires a denial before it will consider the claim. The signal determines whether the next step is a claim, an appeal, or a patient balance."
        },
        {
          "heading": "Confirm the secondary coverage order",
          "body": "Confirm which plan is primary and which is secondary before building the claim. Use the member's current coverage record, the payer's response, and any coordination-of-benefits questionnaire on file. A plan that was secondary last year may be primary this year, and a claim sent in the wrong order will be denied. Record the order and the date it was confirmed beside the claim.\n\nAsk the patient when the record is ambiguous, but do not delay a time-sensitive claim for a verbal answer alone. Send the coordination questionnaire and note the date it went out. If the two plans disagree, keep the claim on hold with a named owner rather than guessing. A wrong secondary claim costs more time than a short, documented pause."
        },
        {
          "heading": "Carry the primary determination into the secondary claim",
          "body": "Attach the primary remittance and the primary allowed amount to the secondary claim. The secondary payer needs to see what the primary paid and what it denied, so a claim sent without the determination is likely to come back. Enter the primary paid amount in the correct field rather than netting it into the charge. A clean secondary claim shows the full charge, the primary payment, and the remaining balance.\n\nCopy the primary denial reason in plain language when the secondary requires it. If the primary denied for medical necessity, the secondary may need the same records, while a denial for timely filing may need an appeal. Match the attachment to the reason instead of sending the same packet every time. The reviewer should be able to explain in one sentence why this secondary claim should pay."
        },
        {
          "heading": "Attach the right supporting documents",
          "body": "Build a short attachment checklist for the secondary queue and keep it beside the claim. Common items include the primary remittance, the primary denial letter, the coordination questionnaire, and the medical records when the secondary asks for them. Use the payer's preferred channel and keep a copy of what was sent. A missing page is a common cause of a preventable denial.\n\nDo not attach the entire chart when the payer asked for one document. Excess records slow the review and can expose information the payer did not need. If the secondary request is unclear, call the payer and record the reference before sending. The attachment should answer the payer's specific question, not tell the whole story of the visit."
        },
        {
          "heading": "Track the secondary filing deadline",
          "body": "Put the secondary filing deadline on the claim as soon as the primary remittance posts. The clock often starts from the primary payment date, not from the date of service, so the team can lose time by waiting. Set an internal target several days before the payer deadline and assign the claim to a named specialist. A deadline that lives only in a payer manual is a deadline the team will miss.\n\nSort the secondary queue by deadline and show the days remaining on the worklist. Escalate any claim that reaches the internal target without being sent. If a required document is missing, record the request date and the follow-up date rather than letting the claim sit. The queue should make the next action obvious before the deadline becomes urgent."
        },
        {
          "heading": "Reconcile the secondary payment to the balance",
          "body": "When the secondary pays, compare the combined payments with the allowed amount and the patient responsibility. A secondary payment can create a new credit if the primary already paid the full allowed amount. Post the secondary payment to the correct claim and note any remaining balance in the account history. Do not close the claim until the three amounts agree.\n\nIf the secondary denies, read the reason before sending another claim. A denial for missing information needs a correction, while a denial for non-covered service may become a patient balance with the right notice. Record the outcome in the secondary log so the team can see which payers require extra steps. The handoff ends only when the account balance is explained, not when the claim is merely submitted."
        }
      ],
      "heroImage": "/images/november-9/run-a-secondary-claim-handoff-when-the-primary-payment-posts.webp",
      "readTime": "8 min read",
      "checklist": [
        "Read the primary remittance for coordination-of-benefits codes before closing.",
        "Confirm the current coverage order and record the date it was verified.",
        "Attach the primary remittance and paid amount to every secondary claim.",
        "Match attachments to the payer's reason instead of sending a full packet.",
        "Track the secondary deadline internally and reconcile the final balance."
      ]
    },
    "image": "/images/november-9/run-a-secondary-claim-handoff-when-the-primary-payment-posts.webp",
    "published": "2026-11-09",
    "category": "blog"
  },
  {
    "slug": "standardize-the-prior-authorization-follow-up-call",
    "title": "Standardize the prior authorization follow-up call",
    "service": "prior authorization",
    "description": "A prior authorization follow-up routine with a request log, five standard questions, reference capture, escalation targets, scheduling updates, and a post-service close.",
    "details": {
      "overview": "A prior authorization request is not finished when it is submitted; it is finished when someone confirms the decision and tells the people who need it. Without a standard follow-up, the team calls at random, gets different answers, and discovers the approval after the appointment has already been moved. A short call script and a shared log turn follow-up into a repeatable step. The routine below keeps the request, the call, and the schedule connected.",
      "sections": [
        {
          "heading": "Start the follow-up from the request log",
          "body": "Open the follow-up from the same log that holds the original request, not from a separate callback list. The log should show the payer, the member, the service, the submitting user, the request number, and the target decision date. Sort the day's calls by target date so the oldest and most urgent requests come first. A follow-up that starts from a clean list takes minutes instead of a search through email.\n\nSet the first follow-up for one business day after submission and adjust the cadence by payer. Some payers need a call at forty-eight hours, while others respond through a portal and need only a check. Record the cadence beside the payer so the team does not reinvent it each time. The log should also show the last call date and the next call date for every open request."
        },
        {
          "heading": "Ask the same five facts on every call",
          "body": "Ask for the request status, the reviewer or queue, the missing items, the expected decision date, and the reference number. Write the answers in the same order every time so a different specialist can read the note. If the representative gives a vague answer, ask which team owns the request and when it will be reviewed. The five facts turn a long hold call into a short, useful record.\n\nDo not accept \"it is pending\" as a complete answer. Ask whether the request is waiting on the payer, the practice, or a clinical reviewer, because each one needs a different next step. If the payer needs a document, send it during the call when possible and note the send time. The goal is to leave each call with either a decision or a specific action and date."
        },
        {
          "heading": "Record the reference and the next date",
          "body": "Write the call reference, the representative's name if given, the date, and the next follow-up date in the log. A reference number is the only reliable way to reconnect a later call to the earlier conversation. Save the portal screenshot or the confirmation page with the log entry when the payer provides one. Without a reference, the next specialist starts over and the patient waits longer.\n\nSet the next date before ending the call, even when the answer is to call back later. Choose a date that matches the payer's stated review window and the service date, then put it on the worklist. If the next date falls after the appointment, escalate instead of accepting the gap. A follow-up date that is later than the service is a warning, not a plan."
        },
        {
          "heading": "Escalate when the request passes its target",
          "body": "Define the target decision date for each payer and service type, then flag requests that pass it. Escalate to the payer's supervisor line, the provider relations contact, or the clinical reviewer according to a written path. Tell the scheduling team the same day so they can protect the appointment. An escalation that stays inside the billing team does not help the patient.\n\nKeep the escalation note short: what was requested, when, what is missing, and what has been tried. Send the same note to the practice owner who can make a clinical or scheduling decision. Do not escalate every request, because the line stops being useful. Escalate the ones that threaten the service date or that have passed a published review window."
        },
        {
          "heading": "Tell scheduling what changed",
          "body": "Send a daily summary to scheduling with approvals, denials, pending requests, and any new documentation requirements. Include the authorization number and the approved units or date range, not just the word approved. Scheduling should be able to confirm the appointment without calling the billing team. A short summary at a fixed time is better than a stream of urgent messages.\n\nWhen a denial arrives, say whether the team is appealing and what the patient should be told. If the service must move, give scheduling the earliest realistic date rather than an optimistic one. Record the change in the appointment note so the front desk and the clinical team see the same information. The handoff is complete when the schedule and the authorization record agree."
        },
        {
          "heading": "Close the loop after the service",
          "body": "After the service, check that the claim uses the authorization number and the approved units. A visit that happened without the right authorization can become a denial months later. If the service differed from the request, document the change and contact the payer before billing. The close step catches the gap while the clinical team still remembers the visit.\n\nAdd the outcome to the request log so the team can see which payers approve, deny, or ask for more information. Review the log monthly for patterns such as one service type that always needs records. Use those patterns to improve the next request rather than only fixing the last one. The follow-up routine is working when fewer requests reach the service date without a decision."
        }
      ],
      "heroImage": "/images/november-9/standardize-the-prior-authorization-follow-up-call.webp",
      "readTime": "8 min read",
      "checklist": [
        "Open follow-ups from the shared request log sorted by target date.",
        "Ask the same five questions and record the answers in a standard order.",
        "Capture a reference number and set the next date before ending the call.",
        "Escalate requests that pass their review target and tell scheduling the same day.",
        "Confirm the authorization number and units on the claim after the service."
      ]
    },
    "image": "/images/november-9/standardize-the-prior-authorization-follow-up-call.webp",
    "published": "2026-11-09",
    "category": "blog"
  },
  {
    "slug": "catch-missed-charges-with-a-daily-service-to-charge-comparison",
    "title": "Catch missed charges with a daily service-to-charge comparison",
    "service": "charge capture",
    "description": "A daily charge capture routine with a reliable service source, a one-day comparison, dollar-ranked gaps, named owners, late-versus-lost charge rules, and a weekly pattern review.",
    "details": {
      "overview": "Most missed charges are not dramatic. A procedure note is signed late, a supply is used but not entered, or a visit is closed before the second service is added. The loss shows up weeks later as a revenue variance that no one can explain. A daily comparison between what happened and what was charged finds the gap while it is still fixable. The routine below keeps the comparison small enough to run every day.",
      "sections": [
        {
          "heading": "Pick the source that proves the service happened",
          "body": "Choose one operational source that records completed services, such as the schedule, the EHR encounter list, or the procedure log. The source must be complete enough to trust and simple enough to export each morning. Do not use the charge file as the proof, because that would compare charges with themselves. Write down the source, the export time, and the person who owns it.\n\nCheck the source for known gaps before relying on it. A schedule may not include add-on services, and an encounter list may miss visits that were never closed. Add a second source only when the first one cannot cover a service line, and label the coverage. The comparison is only as good as the list of what actually happened."
        },
        {
          "heading": "Compare yesterday's services to yesterday's charges",
          "body": "Run the comparison for a single day and match on the patient, the date, and the service. Keep the output short: services with no charge, charges with no service, and duplicates. A one-day window is small enough to investigate and recent enough that the clinical team remembers the visit. Daily work also prevents a month of gaps from piling up before anyone looks.\n\nRun the comparison at the same time each morning and save the file with the date. If the charge file is incomplete at that hour, move the run later instead of comparing against a partial file. Record the run time and the record counts so a missing file is visible. A comparison that silently runs on half the data is worse than no comparison."
        },
        {
          "heading": "Rank the gaps by dollar value",
          "body": "Sort the unmatched services by expected charge, highest first, and work down the list. A missing high-value procedure deserves attention before a missing supply, even if the supply list is longer. Show the count and the dollar value together so the team sees both the volume and the financial weight. Do not let a long tail of small items hide a single large gap.\n\nUse the fee schedule or the contract rate for the expected amount, and mark items where the rate is uncertain. A gap with an unknown value still needs an owner, but it should not be ranked as if the value were zero. Recalculate the ranking weekly to see whether the same service keeps appearing. The ranking is a work order, not a performance score."
        },
        {
          "heading": "Send each gap to a named owner",
          "body": "Assign each gap to the person who can fix it, such as the clinician who signed the note, the coder who built the claim, or the scheduler who closed the visit. Give the owner the patient, date, service, and the evidence that the service happened. Ask for a response by a set time, usually the end of the next business day. A gap sent to a general queue often becomes no one's gap.\n\nProvide a short correction path for each owner type so they know what to change. The clinician may need to sign an addendum, while the coder may need to add a line and refile. Record the response and the resolution in the comparison log. If an owner disagrees, capture the reason rather than closing the item silently."
        },
        {
          "heading": "Separate a late charge from a lost charge",
          "body": "A late charge is one that will be entered after the run, while a lost charge is one that cannot be supported or will never be billed. Label each gap so the team does not spend time on items that will clear themselves. Check the charge file again at the end of the day before treating an item as lost. The distinction keeps the daily list from becoming a permanent complaint.\n\nFor a lost charge, record why it cannot be billed, such as a missing signature or a service that was not performed. Send the pattern to the billing lead rather than repeatedly chasing the same item. If a lost charge is recoverable through a corrected claim, treat it as a late charge with a deadline. The label should lead to an action, not just a category."
        },
        {
          "heading": "Review the pattern weekly",
          "body": "At the end of the week, group the gaps by service, location, clinician, and day of week. Look for a repeatable cause, such as a Tuesday clinic that always closes late or a supply that is never on the charge sheet. Choose one cause and change the upstream step that creates it. A weekly pattern review turns daily cleanup into a process improvement.\n\nReport the week's gap count, dollar value, resolved count, and the one change the team is testing. Compare the result with the prior week, but do not overreact to a single unusual day. Keep the daily comparison running while the change is tested so the effect is visible. The goal is fewer gaps next month, not a perfect list this week."
        }
      ],
      "heroImage": "/images/november-9/catch-missed-charges-with-a-daily-service-to-charge-comparison.webp",
      "readTime": "8 min read",
      "checklist": [
        "Use one trusted service source and document its coverage gaps.",
        "Run the comparison daily at a fixed time and save the output.",
        "Rank gaps by expected dollar value and show count beside value.",
        "Give every gap a named owner and a next-business-day response time.",
        "Label late versus lost charges and review one pattern each week."
      ]
    },
    "image": "/images/november-9/catch-missed-charges-with-a-daily-service-to-charge-comparison.webp",
    "published": "2026-11-09",
    "category": "blog"
  },
  {
    "slug": "train-the-front-desk-to-collect-patient-responsibility-without-surprises",
    "title": "Train the front desk to collect patient responsibility without surprises",
    "service": "patient collections",
    "description": "A front-desk collection routine with a clear pre-visit estimate, plain-language scripts, supported payment channels, hardship handling, collection records, and a blame-free review.",
    "details": {
      "overview": "Patient responsibility is easier to collect when the patient hears about it before the visit. When the number appears at checkout, the conversation turns into a dispute about trust rather than a payment for care. The front desk needs a short explanation, a simple ask, and a clear path for people who cannot pay today. The routine below gives the desk those tools without turning staff into bill collectors.",
      "sections": [
        {
          "heading": "Explain the estimate before the visit",
          "body": "Send or call with the estimate at least two business days before the appointment when the schedule allows. State the covered amount, the expected patient amount, and the fact that the final balance may change. Use the same estimate the billing team uses so the patient does not hear two numbers. A short reminder the day before reduces the chance that the patient arrives unprepared.\n\nDo not present the estimate as a guarantee. Explain the common reasons a final balance can differ, such as a service change, a deductible, or a secondary plan. Give the patient a way to ask questions before the visit. The desk should be able to pull up the estimate and the benefit summary in the same screen."
        },
        {
          "heading": "Rehearse the ask in plain language",
          "body": "Write two or three short scripts and practice them at the front desk. A useful script names the amount, explains that it is the patient's share, and offers a payment method without apology. Avoid phrases that make the payment sound optional or negotiable. The same words should be used at check-in and at checkout so the patient hears a consistent message.\n\nKeep the script flexible enough for a real conversation. If the patient looks surprised, pause and explain the estimate rather than repeating the number louder. If the patient says they cannot pay, move to the hardship path instead of arguing. The desk's job is to explain and offer options, not to win the conversation."
        },
        {
          "heading": "Offer the payment channels the practice supports",
          "body": "List the payment methods the practice actually accepts and make them visible at the desk and on the statement. Include card, cash, check, online payment, and any approved payment plan. Confirm the channel before the patient leaves so there is no confusion about how the balance will be paid. A method that is promised but not supported creates a second call.\n\nTrain the desk on the payment plan rules, including the minimum, the number of installments, and who approves an exception. The desk should be able to start a standard plan without escalation and know when to ask a supervisor. Record the chosen method in the account note. A clear channel list reduces the number of patients who leave saying they will pay later."
        },
        {
          "heading": "Handle the patient who cannot pay today",
          "body": "Respond with a short, respectful path rather than a warning about collections. Ask whether the patient can pay part of the balance today or needs a plan, and offer the option that fits the practice policy. Do not ask for clinical or personal details that the practice does not need to set up a plan. Give the patient the next step in writing.\n\nIf the patient needs financial assistance, provide the application and the contact information without making them feel judged. Set a follow-up date and record it in the account so the balance does not sit unaddressed. Escalate a repeated hardship case to the billing lead rather than improvising a discount at the desk. The practice can be firm about the balance and still be respectful."
        },
        {
          "heading": "Record what was collected and promised",
          "body": "Record the amount collected, the method, the date, and the name of the person who took the payment. If the patient promised a payment, record the date, the amount, and the channel. A promise without a date is not a plan. The account note should let the next staff member continue the conversation without asking the patient to repeat everything.\n\nReconcile the desk's collections with the posting batch at the end of the day. A cash drawer that does not match the logged payments is a control problem, not a rounding error. Investigate the difference before the shift ends and record the resolution. The record protects the patient and the staff member who handled the payment."
        },
        {
          "heading": "Review refusals without blaming the desk",
          "body": "Collect the reasons patients decline to pay and review them monthly. A pattern may point to a confusing estimate, a missing payment option, or a service the patient did not expect. Share the pattern with the billing and clinical teams rather than coaching the desk harder. The desk can only explain a policy that the practice has made clear.\n\nUse a short sample of calls or desk interactions to check whether the script is being used and whether it is working. Ask staff what questions they hear most often and update the script accordingly. Recognize good explanations, not only high collection totals. A blame-free review keeps the desk honest about what is actually happening."
        }
      ],
      "heroImage": "/images/november-9/train-the-front-desk-to-collect-patient-responsibility-without-surprises.webp",
      "readTime": "8 min read",
      "checklist": [
        "Send the estimate early and explain why the final balance may differ.",
        "Use a short, consistent script that names the amount and offers a method.",
        "List supported payment channels and train the desk on plan rules.",
        "Give patients who cannot pay a documented hardship path and follow-up date.",
        "Record every payment and promise, then review refusal reasons monthly."
      ]
    },
    "image": "/images/november-9/train-the-front-desk-to-collect-patient-responsibility-without-surprises.webp",
    "published": "2026-11-09",
    "category": "blog"
  },
  {
    "slug": "review-modifier-choices-before-claims-leave-the-coding-queue",
    "title": "Review modifier choices before claims leave the coding queue",
    "service": "coding review",
    "description": "A modifier review routine with a high-risk list, documentation checks, coding-versus-payer separation, one reviewer for disagreements, override reasons, and a post-payment sample audit.",
    "details": {
      "overview": "Modifiers change how a payer reads a service, so a small code choice can decide whether a claim pays or denies. Most modifier errors are not random; they cluster around a few services, a few combinations, and a few payers. A short review before the claim leaves the coding queue catches those errors while the chart is still open. The routine below keeps the review focused and gives coders a clear escalation path.",
      "sections": [
        {
          "heading": "Build a short list of high-risk modifiers",
          "body": "Start with the modifiers that create the most denials or the most audit questions in this practice. Common examples include the modifiers used for distinct services, bilateral procedures, assistant surgeons, and repeat procedures. Pull the list from the denial data and the coding policy rather than from memory. Keep the list to a manageable size so the review stays fast.\n\nReview the list each quarter and remove modifiers that no longer cause trouble. Add a modifier when a new service line or payer rule makes it risky. Write a one-line reason beside each item so a new coder understands why it is there. The list is a focus tool, not a complete coding manual."
        },
        {
          "heading": "Check the documentation before the code",
          "body": "Read the note for the facts the modifier requires before accepting the code. For a distinct service, look for a separate site, a separate session, or a different diagnosis that supports the claim. For a bilateral procedure, confirm that both sides were performed and documented. The code should follow the note, not the other way around.\n\nMark the specific sentence or section that supports the modifier and save it with the review. If the note is ambiguous, send a clarification to the clinician instead of guessing. A coder who cannot point to the supporting text should not approve the modifier. The documentation check is the part of the review that protects the practice in an audit."
        },
        {
          "heading": "Separate a coding question from a payer rule",
          "body": "Distinguish a question about correct coding from a question about what a payer will accept. Correct coding follows the code set and the documentation, while a payer rule may add a local requirement. Write the two categories in separate columns so the team does not mix them. A payer preference should never override a coding rule without a documented reason.\n\nWhen a payer denies a correctly coded claim, route the issue to the payer policy owner, not back to the coder. When the code itself is wrong, correct the claim and note the change. This separation prevents the team from learning a workaround that creates a compliance risk. It also makes denial patterns easier to explain."
        },
        {
          "heading": "Route disagreements to one reviewer",
          "body": "Name one coding reviewer who resolves modifier disagreements and one backup. Coders should send the note, the proposed code, and the question to that person instead of debating in a group message. The reviewer records the decision and the reasoning in a shared log. A single decision point keeps the same question from getting different answers on different days.\n\nGive the reviewer a response target, such as the same business day, so claims do not wait long. If the question needs a clinician, the reviewer sends a specific query rather than a general request for clarification. Publish the decision in a short coding note so the whole team can apply it. The log becomes a practical reference for the next similar claim."
        },
        {
          "heading": "Record the reason for each override",
          "body": "When a coder overrides the review flag, require a short reason and the supporting reference. The reason might be a payer rule, a corrected note, or a documented coding guideline. Record who approved the override and when. An override without a reason is indistinguishable from a missed check.\n\nReview overrides monthly to see whether one coder, one service, or one payer accounts for most of them. A high override rate may mean the flag is wrong, or it may mean the review is being bypassed. Ask the reviewer to sample the overrides and confirm the logic. Adjust the flag list when the evidence shows it is creating noise."
        },
        {
          "heading": "Audit a sample after the claim pays",
          "body": "Pull a sample of paid claims that used a high-risk modifier and compare the code with the note. A claim can pay and still be wrong, so payment is not proof of accuracy. Look for patterns in the sample rather than judging individual coders. Record the findings and share them with the coding team.\n\nIf the sample finds a systematic error, correct the process and consider whether a disclosure or repayment review is needed with the compliance owner. If the sample is clean, say so and keep the review light. The post-payment audit closes the loop between the pre-bill check and the actual outcome. It also shows whether the high-risk list is targeting the right claims."
        }
      ],
      "heroImage": "/images/november-9/review-modifier-choices-before-claims-leave-the-coding-queue.webp",
      "readTime": "8 min read",
      "checklist": [
        "Build a short high-risk modifier list from denial data and policy.",
        "Require the coder to cite the note text that supports the modifier.",
        "Separate correct-coding questions from payer-specific rules.",
        "Route disagreements to one named reviewer with a same-day target.",
        "Audit a paid sample and act on patterns, not individual blame."
      ]
    },
    "image": "/images/november-9/review-modifier-choices-before-claims-leave-the-coding-queue.webp",
    "published": "2026-11-09",
    "category": "blog"
  },
  {
    "slug": "give-patient-billing-calls-a-written-resolution-path",
    "title": "Give patient billing calls a written resolution path",
    "service": "patient billing support",
    "description": "A patient billing call routine with call-type triage, identity checks, approved resolutions, same-day escalation, written summaries, and a monthly reason review.",
    "details": {
      "overview": "A patient billing call can end in a payment, a promise, a complaint, or a hang-up, and the difference often depends on whether the agent has a path to follow. When every call is handled from scratch, the same questions get different answers and the patient learns to ask for a supervisor. A written resolution path gives the team consistent options and a record of what was decided. The routine below keeps the conversation short, respectful, and traceable.",
      "sections": [
        {
          "heading": "Identify the call type in the first minute",
          "body": "Ask two quick questions to classify the call: what the patient is looking at and what they want to happen. Most calls fall into a small set, such as a new statement, a confusing balance, a payment arrangement, a refund, or a dispute. Naming the type early lets the agent open the right screen and the right script. The patient should not have to repeat the story to a second person.\n\nRecord the call type in the account note even when the call is short. The type is the data the team needs to see which issues drive volume. If a call fits two types, choose the one that determines the next action. A clear type also helps route the call to a specialist without transferring the patient blindly."
        },
        {
          "heading": "Confirm the account before discussing money",
          "body": "Verify the patient's identity using the practice's approved method before sharing any balance or claim detail. Confirm the date of birth, the account number, or another identifier the policy requires. Do not read clinical information to a caller who has not been verified, even if the caller sounds familiar. The verification step protects the patient and the practice.\n\nIf the caller is a spouse, a caregiver, or a parent, check whether an authorization is on file. If it is not, explain what is needed and offer to send the form. Do not make an exception because the caller is upset, because the exception becomes the precedent. A short, calm explanation of the rule is usually better than a long justification."
        },
        {
          "heading": "Use a short set of approved resolutions",
          "body": "Write down the resolutions the agent may offer without approval, such as explaining a statement, taking a payment, setting a standard plan, or sending an itemized bill. Add a second list of items that need a supervisor, such as a large write-off, an unusual refund, or a legal threat. Keep both lists visible on the agent's desktop. The agent should never invent a resolution to end a call.\n\nReview the list with the billing lead and the finance owner so the limits match the practice's policy. Update it when a payer rule or a state requirement changes. Train new agents on the list before they take live calls. A written list shortens calls because the agent does not have to ask for permission for routine work."
        },
        {
          "heading": "Escalate a disputed balance the same day",
          "body": "Send a disputed balance to the billing lead or the appropriate reviewer before the end of the business day. Include the patient's concern, the account history, the amount, and what the patient was told. Do not promise a specific outcome while the review is open. A same-day escalation prevents the patient from calling back and starting over.\n\nGive the reviewer a short window, such as two business days, to decide the next step. Tell the patient when to expect an answer and record that date in the account. If the review needs clinical input, say so plainly and give a realistic timeline. The patient may not get the answer they want, but they should get a clear process."
        },
        {
          "heading": "Send a written summary after the call",
          "body": "Send a short summary by the patient's preferred channel when the call changes the balance, sets a plan, or starts a review. State the amount, the next step, the date, and the contact information. Keep the language plain and avoid codes the patient will not recognize. Save a copy of the summary in the account.\n\nIf the patient does not use email or text, note the preference and send a letter or make a follow-up call. Do not assume the patient understood a verbal explanation, especially when the call was emotional. The written summary is also the record the next agent reads before the next call. A clear summary reduces repeat calls and disputes."
        },
        {
          "heading": "Review call reasons every month",
          "body": "Group the month's calls by type, outcome, and repeat contact. Look for one issue that creates a large share of the volume, such as a statement that never arrives or a portal that will not accept a payment. Share the finding with the team that owns the upstream process, not only with the call center. The goal is to remove the reason for the call, not just handle it faster.\n\nTrack the share of calls that end with a documented resolution and the share that require a callback. Read a small sample of notes to check whether the resolution is clear enough for another agent to continue. Ask agents which scripts are missing or wrong. A monthly review keeps the written path current and shows whether the investment in training is paying off."
        }
      ],
      "heroImage": "/images/november-9/give-patient-billing-calls-a-written-resolution-path.webp",
      "readTime": "8 min read",
      "checklist": [
        "Classify each call by type and record it in the account note.",
        "Verify identity and authorization before discussing any balance.",
        "Keep a visible list of resolutions the agent may offer without approval.",
        "Escalate disputes the same day and give the patient a response date.",
        "Send a written summary and review call reasons monthly."
      ]
    },
    "image": "/images/november-9/give-patient-billing-calls-a-written-resolution-path.webp",
    "published": "2026-11-09",
    "category": "blog"
  }
];
