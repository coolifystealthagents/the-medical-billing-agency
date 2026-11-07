import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november7Blog = [
  {
    "slug": "build-a-claim-edit-threshold-before-claims-leave-the-practice",
    "title": "Build a claim edit threshold before claims leave the practice",
    "service": "claim edit governance",
    "description": "A claim edit routine for billing teams, with blocking rules, sensible thresholds, override ownership, weekly hit reports, dated payer rules, and a false-positive cost review.",
    "details": {
      "overview": "A claim edit is a rule that stops a claim before it reaches the payer. The useful question is not whether the rule exists but whether it catches errors that would cost more than the pause. This routine sets a threshold for blocking edits, assigns an override owner, and reviews false positives on a weekly rhythm. It keeps the edit set small enough to trust and specific enough to change behavior.",
      "sections": [
        {
          "heading": "Choose the edits that block a claim",
          "body": "Start with the handful of fields that most often cause a rejection or a denial, such as a missing member identifier, an invalid diagnosis pointer, or a place of service that conflicts with the claim. Do not import every available rule from a vendor list on the first day. Each blocking rule creates a pause, and too many pauses train the team to click through warnings. Write down the reason each rule exists and the claim type it applies to. The list should fit on one page before it goes live.\n\nSeparate hard stops from soft warnings. A hard stop should apply to a field that makes the claim unpayable, while a warning can flag a pattern for review without holding the claim. Publish the distinction so specialists know which messages they may override. Review the hard-stop list with the billing lead and the person who owns the claim workflow. A rule that nobody can explain should not block a claim."
        },
        {
          "heading": "Set thresholds high enough to be credible",
          "body": "A threshold converts a rule into a decision, such as holding a claim only when the expected payment is above a stated amount or when the same field has failed twice. Set the threshold with the practice's actual claim mix in mind. A small practice with many low-dollar claims may prefer a warning and a sampling review. Write the threshold next to the rule so a reviewer can see why the claim stopped. The reason should be visible on the screen, not buried in a policy folder.\n\nTest the threshold on a week of closed claims before enforcing it. Count how many claims would have been blocked and how many of those were genuinely wrong. If the rule catches mostly clean claims, raise the threshold or narrow the field. Record the test date and the sample so the decision can be repeated. A threshold without evidence is just a preference, and the team will treat it that way."
        },
        {
          "heading": "Route overrides to a named reviewer",
          "body": "An override is a decision, so it needs a named reviewer and a reason. Give the specialist a short list of approved reasons, such as a payer-specific rule that does not apply to this plan. Require the reviewer to record the reason and the supporting reference. Do not let an override erase the edit history. The claim should show that the rule fired and who released it.\n\nReview overrides weekly rather than case by case in isolation. A cluster of overrides on one rule usually means the rule is wrong, not that the team is careless. Send the finding to the rule owner with the claim examples attached. If the rule is correct, retrain the affected step instead of adding another approval layer. The goal is a shorter list of trustworthy stops."
        },
        {
          "heading": "Read the edit hit report every week",
          "body": "The edit report should show how often each rule fired, how often it was overridden, and how often the claim was corrected. A rule that fires constantly and is always overridden is a candidate for removal. A rule that rarely fires but prevents a costly rejection may be worth keeping. Sort the report by volume and by correction rate so both signals stay visible. Add the average delay per blocked claim so speed is part of the view.\n\nBring one finding to the weekly review and decide a change. Do not attempt to tune every rule at once. Pick the rule with the highest override rate or the longest delay. Change one condition, record the date, and compare the next two weeks. A small controlled change is easier to defend than a wholesale rewrite, and it shows the team that the report leads to action."
        },
        {
          "heading": "Keep payer-specific rules dated",
          "body": "Payer rules change, so every rule needs a source and a review date. Store the policy name, the page or section, and the date the team checked it. When a payer updates a manual, the rule owner should confirm whether the edit still applies. A stale rule can block clean claims for months without anyone noticing. The review date turns an invisible stale rule into a scheduled task.\n\nUse a simple cadence, such as a quarterly review for high-volume payers and a semiannual review for the rest. Add an out-of-cycle check when a payer announces a change. Record the outcome even when the rule stays the same. The record shows the practice looked and gives the next reviewer a starting point. Keep the notice link with the rule so the check does not depend on memory."
        },
        {
          "heading": "Measure the cost of a false positive",
          "body": "A false positive costs staff time, a delayed claim, and sometimes a patient conversation. Estimate the minutes spent reviewing and releasing a blocked claim, then multiply by the number of false positives in a month. Compare that cost with the rejections the rule prevents. The comparison does not need to be exact to be useful. It gives the billing lead a way to judge whether the pause earns its place.\n\nReview the cost with the rule owner and the team lead together. If a rule saves less than it costs, narrow it or turn it into a warning. If it prevents a small number of high-value failures, keep it and document the reason. Recheck the estimate when claim volume or payer behavior changes. The point is a deliberate trade, not a permanent rule set."
        }
      ],
      "heroImage": "/images/november-7/build-a-claim-edit-threshold-before-claims-leave-the-practice.webp",
      "readTime": "8 min read",
      "checklist": [
        "Limit blocking edits to fields that make a claim unpayable or clearly rejectable.",
        "Write the threshold and the reason beside every rule on the review screen.",
        "Name one override reviewer and require a reason plus a supporting reference.",
        "Review edit hits, overrides, corrections, and delay in one weekly report.",
        "Attach a source and a review date to each payer-specific rule."
      ]
    },
    "image": "/images/november-7/build-a-claim-edit-threshold-before-claims-leave-the-practice.webp",
    "published": "2026-11-07",
    "category": "blog"
  },
  {
    "slug": "reconcile-a-lockbox-deposit-to-the-posting-batch",
    "title": "Reconcile a lockbox deposit to the posting batch",
    "service": "lockbox reconciliation",
    "description": "A lockbox reconciliation routine for billing teams, covering deposit totals, payer and patient splits, unidentified cash, evidence, close ownership, and recurring exceptions.",
    "details": {
      "overview": "A lockbox deposit is a bank total, while a posting batch is a set of patient and payer allocations. The two numbers rarely match at the start of the day. This routine closes the gap with a repeatable comparison, a clear home for unidentified cash, and evidence that another person can follow. It keeps the daily cash view honest without pretending every difference is an error.",
      "sections": [
        {
          "heading": "Match the deposit date to the batch date",
          "body": "Start with the bank deposit date and the posting batch date, because a payment can post one day and settle another. Write both dates on the reconciliation sheet before comparing amounts. If the bank posts after the practice cutoff, the payment belongs to the next batch even when the remittance arrived earlier. Do not move a payment between dates just to make the totals match. The date trail is part of the audit evidence.\n\nRecord the deposit reference, the bank account, and the batch identifier in one place. A reviewer should be able to open the bank record and the posting report from the same sheet. If the practice uses more than one lockbox, keep a separate row for each box. Mixing boxes hides which location or payer caused the difference. A short, consistent header makes the rest of the work faster."
        },
        {
          "heading": "Separate patient payments from payer remittance",
          "body": "Patient checks and payer electronic remittances follow different paths and should not be reconciled as one pool. Split the deposit into payer, patient, and other categories before checking the total. Patient payments often arrive without a claim reference, while payer remittances usually include one. A combined view makes it difficult to see which side is short. The split also tells the team who should research the difference.\n\nUse the remittance advice to identify payer payments and the payment coupon or portal record to identify patient payments. If a single check covers both, record the split on the sheet and keep the supporting document. Do not force an unmatched item into a category just to clear the row. Mark it as unidentified and route it to the owner. The category should describe the evidence, not the hope."
        },
        {
          "heading": "Handle short deposits and unidentified cash",
          "body": "A short deposit needs a reason before it needs a journal entry. Check for a missed payment, a bank fee, a reversed item, or a payment applied to the wrong account. Compare the deposit detail with the batch detail line by line rather than only at the total. A total match can hide two offsetting errors. Record the reason and the person who confirmed it, then decide whether the batch needs a correction.\n\nUnidentified cash belongs in a named holding account with an owner and an age. Do not leave it in a suspense account without a review date. Search the patient and payer records using the check number, amount, and deposit date. If the owner cannot identify the payment within the stated window, escalate it rather than guessing. The holding account should shrink over time, not become a permanent parking lot."
        },
        {
          "heading": "Keep the reconciliation evidence with the batch",
          "body": "Save the bank statement, the deposit detail, the posting report, and the reconciliation sheet together. The sheet should show the totals, the differences, the explanations, and the reviewer. A screenshot of a bank screen is weak if it does not show the account and the date. Prefer a downloaded statement or a report that can be tied to the accounting period. The evidence should let a second person repeat the comparison.\n\nIf an adjustment is made, link it to the original reconciliation and state the reason. Do not overwrite the earlier sheet when a later correction changes the total. Keep the version history or save a dated copy. A clean chain from bank deposit to posted payment is more valuable than a tidy-looking final number. The next month's review should be able to start from the prior month's evidence."
        },
        {
          "heading": "Assign a cutoff owner for the daily close",
          "body": "Name the person who owns the daily cutoff and the person who covers when that owner is away. The owner confirms that the bank file arrived, the posting batch is complete, and the reconciliation sheet is current. Without a named owner, the task waits until someone notices a growing difference. Write the cutoff time and the escalation contact in the procedure. The handoff should be visible, not assumed.\n\nUse a short end-of-day check rather than a full review. The check should confirm the deposit total, the batch total, the open differences, and the next action. If the owner is unavailable, the backup should have the same access and the same instructions. Record who completed the check each day. A daily signature makes gaps easy to see and removes ambiguity about who was responsible."
        },
        {
          "heading": "Review recurring deposit exceptions weekly",
          "body": "Sort the week's exceptions by cause, payer, and dollar amount. A recurring bank fee is a different problem from a recurring missing remittance. Look for one cause that appears several times, because fixing it may remove a whole class of differences. Bring the finding to the billing lead with examples and a proposed change. The review should end with one owner and one date.\n\nTrack whether the change reduced the exception count in the following weeks. If the same cause returns, the fix may have addressed the symptom rather than the source. Review the holding account age alongside the exception count. A small number of old items can be more important than a larger number of new ones. Keep the weekly note short so the team actually reads it."
        }
      ],
      "heroImage": "/images/november-7/reconcile-a-lockbox-deposit-to-the-posting-batch.webp",
      "readTime": "8 min read",
      "checklist": [
        "Record the bank deposit date, posting batch date, account, and batch identifier.",
        "Split the deposit into payer, patient, and other categories before checking totals.",
        "Explain every short deposit and route unidentified cash to a named holding account.",
        "Keep the bank detail, posting report, and reconciliation sheet together.",
        "Review weekly exceptions for one recurring cause and track the fix."
      ]
    },
    "image": "/images/november-7/reconcile-a-lockbox-deposit-to-the-posting-batch.webp",
    "published": "2026-11-07",
    "category": "blog"
  },
  {
    "slug": "keep-an-authorization-number-attached-through-claim-submission",
    "title": "Keep an authorization number attached through claim submission",
    "service": "authorization tracking",
    "description": "An authorization tracking routine for billing teams, with order-level fields, service matching, claim and note capture, expiration checks, monthly reconciliation, and scheduling feedback.",
    "details": {
      "overview": "An authorization number is only useful if it reaches the claim with the right service, date, and provider. Too often it lives in a scheduling note, a portal message, or one person's inbox. This routine puts the number on the order, checks it against the scheduled service, and carries it into the claim record. It also gives the team a way to find authorizations that never arrived.",
      "sections": [
        {
          "heading": "Put the authorization field on the order",
          "body": "The authorization number should be a required field on the order or scheduling record, not a free-text remark. Add the payer, the authorization type, the approved units, and the effective dates beside the number. A number without those details is hard to match to a claim later. Make the field visible to scheduling, clinical staff, and billing without requiring a separate system login. The earlier the field appears, the fewer places the number can hide.\n\nDecide who may enter the number and who may change it. A scheduler may record a number received from the payer, while a billing specialist confirms that it matches the service. Keep an audit trail of edits and the source of each value. Do not let a later user overwrite the original number without a reason. The order should show the current value and how it got there."
        },
        {
          "heading": "Compare the authorization to the scheduled service",
          "body": "A valid number for the wrong service is not usable. Compare the authorized procedure, the scheduled procedure, the date, the place of service, and the rendering provider. If the schedule changes, recheck the authorization instead of assuming it still applies. Record the comparison date and the person who confirmed it. A mismatch found before the visit is a scheduling problem, while the same mismatch after the claim is a denial.\n\nUse a short checklist for the comparison rather than a memory-based review. The checklist should include the patient, the payer, the service, the date range, and the units. If the authorization covers a range of dates, confirm that the visit falls inside it. If the payer requires a referral in addition to an authorization, record both. The goal is one visible match before the service is delivered."
        },
        {
          "heading": "Carry the number into the claim and the note",
          "body": "The claim should carry the authorization number in the field the payer expects, and the account note should carry the same number with its source. A number in the note but not on the claim does not help the payer. A number on the claim but not in the note is hard to defend later. Enter both from the same verified value. Check the claim after submission to confirm the field survived the clearinghouse.\n\nIf the payer requires the number in a specific format, document that format with an example. Avoid adding spaces, prefixes, or punctuation that the payer does not use. When a claim is corrected, keep the original authorization value and add the corrected one with a reason. The history should show whether the number changed or the service changed. That distinction matters when the payer reviews the claim."
        },
        {
          "heading": "Treat an expired authorization as a stop signal",
          "body": "An authorization with an end date before the service date should stop the claim before submission. Do not submit and hope the payer overlooks the date. Route the case to the owner who can request an extension or a new authorization. Record the request date and the payer response. If the service has already happened, document the sequence clearly and follow the practice's approved process.\n\nThe same rule applies when the authorized units are exhausted. Count the units already used before adding another service. If the remaining units are unclear, ask the payer for a written confirmation. Do not split a service into smaller units to fit the authorization without guidance from the qualified owner. The administrative team can prepare the request but should not make the clinical or coding decision."
        },
        {
          "heading": "Reconcile authorizations before month end",
          "body": "Pull the list of authorizations issued during the month and compare it with the claims submitted. Look for authorizations with no matching claim, claims with no authorization, and numbers that appear on more than one patient. A missing match may mean a cancelled service, a delayed claim, or a number that was never entered. Assign each exception to an owner and a due date. The reconciliation should produce a short worklist, not a long report.\n\nInclude the authorization status in the month-end close checklist. A pending authorization is not the same as an approved one, and an approved authorization is not the same as a paid claim. Keep those states separate in the tracking view. Review the exceptions with scheduling and billing together so both sides see the same gap. The meeting should end with one change to the intake or handoff step."
        },
        {
          "heading": "Review dropped authorizations with scheduling",
          "body": "When an authorization never reaches the claim, find the point where it dropped. The number may have been received but not entered, entered but not matched, or matched but not carried into the claim. Each failure point has a different fix. Review a small sample of dropped cases with the scheduler and the billing specialist who handled them. Do not rely on a single story from one side of the handoff.\n\nChange one step and watch the next sample. A required field at scheduling may solve the entry gap, while a claim edit may solve the carry-forward gap. If the same payer creates repeated problems, document the payer-specific path and share it with the team. Keep the review focused on the workflow rather than the individual. The measure of success is fewer missing numbers, not more reminders."
        }
      ],
      "heroImage": "/images/november-7/keep-an-authorization-number-attached-through-claim-submission.webp",
      "readTime": "8 min read",
      "checklist": [
        "Make the authorization number a required order field with dates and units.",
        "Compare the authorization to the scheduled service before the visit.",
        "Enter the same verified number on the claim and in the account note.",
        "Stop a claim when the authorization is expired or the units are exhausted.",
        "Reconcile issued authorizations to submitted claims before month end."
      ]
    },
    "image": "/images/november-7/keep-an-authorization-number-attached-through-claim-submission.webp",
    "published": "2026-11-07",
    "category": "blog"
  },
  {
    "slug": "control-a-documentation-hold-queue-for-missing-records",
    "title": "Control a documentation hold queue for missing records",
    "service": "documentation hold management",
    "description": "A documentation hold routine for billing teams, with hold reasons, dated ownership, escalation steps, signature separation, source fixes, and a weekly aging report.",
    "details": {
      "overview": "A documentation hold is a claim waiting for a record, a signature, or a clarification. The queue becomes dangerous when holds have no reason, no owner, and no age. This routine gives every hold a category and a date, separates missing signatures from missing notes, and pushes fixes back to the source. It keeps the queue short enough to work and visible enough to manage.",
      "sections": [
        {
          "heading": "Define the reasons a claim can be held",
          "body": "Create a short list of hold reasons that match the practice's actual work. Common categories include a missing progress note, a missing signature, an unclear diagnosis, a missing order, and a record that belongs to another encounter. Do not use a single other category for everything. A specific reason tells the next person where to look and who should act. The list should be short enough to remember and specific enough to report.\n\nAssign a default owner to each reason. A missing signature may belong with the clinician or the clinical support team, while a missing order may belong with scheduling or the front desk. Write the owner beside the reason in the queue view. If the owner is a role rather than a person, name the person who currently fills that role. A hold without an owner is a claim that will wait until someone notices."
        },
        {
          "heading": "Give each hold a date and an owner",
          "body": "Record the date the hold started, the date the record was requested, and the next follow-up date. These dates are different and should not be collapsed into one updated timestamp. The original hold date shows how long the claim has waited, while the follow-up date shows what happens next. Add the name of the person who made the request and the channel used. A phone request and a portal request leave different evidence.\n\nSort the queue by age and by owner, not only by patient name. A claim held for two days needs a different response from one held for two weeks. Give each age band a standard action, such as a second request at five days and an escalation at ten. Apply the action consistently so the queue does not depend on who is working it. Record when the action was taken and what came back."
        },
        {
          "heading": "Set an escalation ladder before the hold ages",
          "body": "Write the escalation ladder before the queue is full. The first step is a request to the named owner, the second is a reminder with the claim impact, and the third is a conversation with the billing lead or the clinical lead. Each step should have a trigger and a time limit. Do not wait for a monthly meeting to raise a claim that is blocking cash. The ladder should be easy to follow during a busy week.\n\nEscalation is not blame. It is a signal that the normal path did not produce the record. Record the reason the first request failed, such as an unavailable clinician, a wrong fax number, or a portal that would not accept the file. That reason is the raw material for the fix. Keep the escalation note short and attach it to the claim. The next reviewer should see the path without reading a long email thread."
        },
        {
          "heading": "Separate a missing signature from missing notes",
          "body": "A missing signature and a missing note require different work. A signature issue may be resolved with an attestation or a signature workflow, while a missing note may need a clinician to document the encounter. Mixing them into one queue hides the fact that one is usually faster to fix. Split the categories and report them separately. The team can then see which type is driving the delay.\n\nFor a signature issue, confirm what the payer accepts before promising a fix. For a missing note, confirm that the record does not already exist under another encounter or date. Check the document history before asking the clinician to rewrite anything. A duplicate request wastes clinical time and can create conflicting records. When the record is found, attach it to the correct claim and close the hold with the source noted."
        },
        {
          "heading": "Reduce holds at the source",
          "body": "Count holds by reason, by clinician, and by location. A cluster in one clinic or one document type usually points to an intake or template problem. If signatures are often missing, the signing step may be too far from the encounter. If orders are often missing, the order may not be captured at scheduling. Fix the step that creates the gap rather than adding another follow-up layer. The goal is fewer holds, not a faster hold queue.\n\nTest one source fix for several weeks before judging it. For example, add a signature check to the encounter close or a required order field at scheduling. Compare the hold count before and after with the same reason category. Share the result with the people who do the work, not only with leadership. A fix that makes their day harder will not last, even if the report improves for a month."
        },
        {
          "heading": "Report hold aging to the practice",
          "body": "A useful report shows open holds, median age, the oldest items, and the share that are waiting on the practice versus the payer. Keep the report to one page and use the same categories as the queue. Highlight the items that crossed an escalation trigger since the last report. Do not bury the oldest claim in an average. The report should make the next action obvious.\n\nReview the report with the billing lead and the clinical lead on a fixed cadence. Ask which holds need a decision rather than another reminder. Record the decisions and the owners in the same report. Follow up on the prior week's decisions before adding new ones. A short review that closes items is more useful than a long report that only describes the queue."
        }
      ],
      "heroImage": "/images/november-7/control-a-documentation-hold-queue-for-missing-records.webp",
      "readTime": "8 min read",
      "checklist": [
        "Use a short list of hold reasons and assign a default owner to each.",
        "Record the hold start date, request date, and next follow-up date separately.",
        "Write an escalation ladder with a trigger and time limit for each step.",
        "Keep missing signatures and missing notes in separate queues.",
        "Report hold aging with the oldest items and the practice-versus-payer split."
      ]
    },
    "image": "/images/november-7/control-a-documentation-hold-queue-for-missing-records.webp",
    "published": "2026-11-07",
    "category": "blog"
  },
  {
    "slug": "set-a-charge-lag-threshold-for-hospital-based-providers",
    "title": "Set a charge lag threshold for hospital-based providers",
    "service": "charge lag control",
    "description": "A charge lag routine for hospital-based billing teams, with service-line definitions, separate thresholds, handoff analysis, late-charge review, department feedback, and a measured rollout.",
    "details": {
      "overview": "Charge lag is the gap between the service date and the date the charge reaches the billing system. In hospital-based settings, the gap often grows at the handoff between the clinical department and the billing team. This routine defines lag by service line, sets thresholds that reflect the work, and finds the point where delay accumulates. It does not ask the billing team to fix a clinical documentation process alone.",
      "sections": [
        {
          "heading": "Define charge lag by service line",
          "body": "Measure lag from the date of service to the date the charge is ready for claim creation. That endpoint is more useful than the date the claim is submitted, because it separates documentation delay from billing delay. Define the start and end for each service line, since an inpatient stay and an outpatient procedure do not follow the same path. Write the definition in the procedure so the report does not drift. A clear definition is the first control.\n\nExclude canceled services, duplicate charges, and records that are waiting on a payer response. Those items belong in a different queue. State whether the lag clock pauses for a missing order or continues while the order is obtained. The choice changes the number, so it must be consistent across departments. Review the definition with the clinical departments before publishing a threshold."
        },
        {
          "heading": "Set different thresholds for scheduled and urgent work",
          "body": "A scheduled outpatient visit and an urgent hospital service should not share one threshold. Scheduled work can be checked against a tighter window because the record is usually available at the point of care. Urgent work may need a longer window for documentation and review. Set the threshold by service line and by workflow, not by a single practice-wide number. The team should know which threshold applies before the charge is late.\n\nExpress the threshold as a target and a review trigger. The target is the normal window, while the trigger is the age at which a charge moves to an exception list. Keep the two separate so a missed target does not automatically become an escalation. Review the thresholds with the department leads and adjust them only with evidence. A threshold that nobody believes will be ignored, and the report will lose credibility."
        },
        {
          "heading": "Find the handoff where lag accumulates",
          "body": "Break the lag into segments, such as service to documentation, documentation to coding review, and coding review to charge entry. Measure each segment rather than only the total. A total lag of five days may hide a one-day documentation step and a four-day queue at charge entry. The segment view tells the team where to act. Use the same timestamps for every service line so the comparison is fair.\n\nWalk one or two delayed cases through the process with the people who handled them. Ask where the record waited and what they needed to move it. The answer may be a system queue, an unclear template, or a missing communication. Record the finding in plain language. A process map built from real cases is more useful than a diagram built from assumptions."
        },
        {
          "heading": "Watch for charges that arrive after the claim window",
          "body": "Some charges arrive so late that the claim window is already tight. Flag those items separately and give them a priority path. Do not let them sit in the normal charge queue behind routine work. Confirm whether the payer has a filing limit or a timely filing rule that applies to the service. The billing team should know the deadline before the charge is entered. A late charge that misses a filing limit is a write-off risk, not just a metric.\n\nRecord the reason for the late charge in a short category, such as missing documentation, late order, interface delay, or manual entry. Review the categories weekly. If one category dominates, the fix belongs with the source department. If the categories are spread evenly, the queue design may be the problem. Do not use the late-charge list as a blame report. Use it to find the step that needs support."
        },
        {
          "heading": "Review lag with the clinical departments",
          "body": "Bring a small set of examples to the department review, not a large spreadsheet. Show the service date, the documentation date, the charge date, and the point where the record waited. Ask the department what would have helped. The conversation should produce one change that the department can own. A billing team cannot fix a documentation template by working harder on the back end.\n\nKeep the review short and regular. A monthly meeting with three examples is more useful than a quarterly meeting with a hundred rows. Record the change, the owner, and the next review date. Follow up on the prior change before starting a new one. The department should see that the review leads to a practical adjustment, not just another request for faster documentation."
        },
        {
          "heading": "Test a threshold before enforcing it",
          "body": "Run the threshold in report-only mode for a few weeks. Show what would have been flagged without changing the queue or the escalation. Compare the flagged items with the cases the team already knew were late. If the threshold misses obvious problems or flags normal work, adjust it before enforcement. The test period also gives the team time to ask questions. A threshold introduced without a trial often creates resistance.\n\nAfter enforcement, review the first month for false alarms and missed cases. Keep a short log of threshold changes and the reason for each. Recheck the threshold when the service mix, the electronic record, or the department workflow changes. The number is a management tool, not a fixed law. The goal is a reliable signal that helps the team act earlier."
        }
      ],
      "heroImage": "/images/november-7/set-a-charge-lag-threshold-for-hospital-based-providers.webp",
      "readTime": "8 min read",
      "checklist": [
        "Define charge lag from service date to charge-ready date for each service line.",
        "Set a target and an escalation trigger for scheduled and urgent work separately.",
        "Measure each handoff segment instead of relying on the total lag.",
        "Flag charges near a filing limit and give them a priority path.",
        "Run a new threshold in report-only mode before enforcing it."
      ]
    },
    "image": "/images/november-7/set-a-charge-lag-threshold-for-hospital-based-providers.webp",
    "published": "2026-11-07",
    "category": "blog"
  },
  {
    "slug": "handle-a-retroactive-eligibility-termination-on-submitted-claims",
    "title": "Handle a retroactive eligibility termination on submitted claims",
    "service": "retroactive eligibility review",
    "description": "A retroactive eligibility termination routine for billing teams, with notice review, affected-claim scoping, rebill decisions, payer instructions, appeal clocks, and pattern review.",
    "details": {
      "overview": "A retroactive eligibility termination says the patient was not covered for a period that has already passed. The notice can arrive after claims were paid, denied, or still pending. This routine reads the notice for its effective date, finds the claims inside the affected window, and separates a rebill from a patient responsibility review. It keeps the payer instruction and the appeal clock visible.",
      "sections": [
        {
          "heading": "Read the termination notice for its effective date",
          "body": "Start with the effective date and the reason stated in the notice. A termination date is not always the same as the date the practice received the notice. Record both dates in the case file. If the notice covers a range, write the start and end dates rather than a single day. The date range determines which claims belong in the review.\n\nCheck whether the notice applies to one plan, one product, or the entire payer relationship. A change in a Medicare Advantage plan may not affect a commercial plan from the same company. Read the member identifier and the group number on the notice. Compare them with the values on the claim before assuming the claim is affected. A mismatch may mean the notice belongs to a different coverage record."
        },
        {
          "heading": "Identify claims inside the affected window",
          "body": "Pull every claim for the patient with a date of service inside the notice window. Include paid claims, denied claims, pending claims, and claims that were never submitted. The status of the claim changes the next step, but it does not change whether the claim belongs in the review. Build the list from the practice management system rather than from memory. Attach the claim number and the current status to each row.\n\nCheck claims that straddle the effective date, such as a multi-day stay or a global service. A claim with a date range may need to be split or reviewed by the payer. Do not assume the whole claim is covered or uncovered. Record the payer's instruction for the straddling case. If the instruction is unclear, ask for written guidance before changing the claim."
        },
        {
          "heading": "Decide between rebilling and patient responsibility",
          "body": "A retroactive termination may lead to a corrected claim to another payer, a rebill to the patient, or a write-off under the practice policy. The decision depends on the payer instruction, the patient's other coverage, and the practice's financial policy. Do not choose the outcome from a single team's preference. Document the basis for the decision and the person who approved it. The case should show why one path was chosen over another.\n\nIf another payer may be responsible, confirm the coverage and the filing deadline before rebilling. If the patient may be responsible, follow the practice's approved notice and financial assistance process. The billing team can prepare the account and explain the balance, but it should not give legal or clinical advice. Route questions outside the approved script to the billing lead. Keep the patient conversation factual and documented."
        },
        {
          "heading": "Document the payer instruction and reference",
          "body": "When a payer gives an instruction by phone or portal, save the exact wording, the date, the representative, and the reference number. A summary written from memory is weaker than a stored message. If the instruction conflicts with the member notice, keep both and route the conflict to the billing lead. Do not resolve a payer contradiction by choosing the answer that is easier to work. The case file should show the conflict and the escalation.\n\nAttach the instruction to every claim in the affected group, not only to the first claim. A later reviewer should not have to search a separate inbox for the rule. If the instruction changes, add a dated note rather than replacing the original. The history should show what the team knew at the time it acted. That record protects the practice and helps the next case move faster."
        },
        {
          "heading": "Protect the appeal clock during the rebill",
          "body": "A rebill does not always stop the appeal clock on the original claim. Check the payer's rule and the denial notice before deciding that an appeal is unnecessary. Record the original denial date, the appeal deadline, and the date the rebill was submitted. If the rebill is rejected, the team may still need to appeal the original decision. Missing that window can turn a recoverable claim into a write-off.\n\nSet a follow-up date for the rebill and for the appeal deadline. Give both dates to the same owner so one does not hide the other. If the payer confirms that the rebill replaces the appeal, save that confirmation. If the payer is silent, keep the appeal option open until the deadline passes or the payer responds in writing. The safer path is to document the decision, not to assume it."
        },
        {
          "heading": "Review retroactive terminations for patterns",
          "body": "Count the notices by payer, plan, and effective date. A cluster may point to a plan change, a data feed problem, or a recurring enrollment issue. Review the claims that were paid before the notice and the claims that were denied after it. The pattern may show that the practice needs a better eligibility check at a specific point in the schedule. It may also show that one payer sends notices late or with unclear instructions.\n\nShare the finding with the billing lead and the eligibility team. If a payer repeatedly sends late notices, document the dates and the impact. Do not turn the review into a complaint without evidence. Use the examples to ask for a clearer notice or a better contact path. Track whether the next month's notices arrive earlier or with more complete information. The review should improve the response, not just record the volume."
        }
      ],
      "heroImage": "/images/november-7/handle-a-retroactive-eligibility-termination-on-submitted-claims.webp",
      "readTime": "8 min read",
      "checklist": [
        "Record the termination effective date and the date the practice received notice.",
        "Pull paid, denied, pending, and unsubmitted claims inside the affected window.",
        "Document the basis for a rebill, patient responsibility, or write-off decision.",
        "Save the payer instruction with its date, representative, and reference number.",
        "Track the original appeal deadline separately from the rebill follow-up date."
      ]
    },
    "image": "/images/november-7/handle-a-retroactive-eligibility-termination-on-submitted-claims.webp",
    "published": "2026-11-07",
    "category": "blog"
  },
  {
    "slug": "audit-a-provider-directory-listing-before-patients-rely-on-it",
    "title": "Audit a provider directory listing before patients rely on it",
    "service": "provider directory accuracy",
    "description": "A provider directory audit routine for practices, with enrollment as the source, patient-facing fields, patient-path testing, change confirmation, event-triggered rechecks, and a dated listing owner.",
    "details": {
      "overview": "A provider directory listing is often the first place a patient checks before booking. It can also be the last place a practice updates after a move, a merger, or a credentialing change. This routine audits the listing against the enrollment record and tests it through the patient path. It assigns a dated owner and a recheck trigger so the listing does not drift back out of date.",
      "sections": [
        {
          "heading": "Start from the enrollment record, not the website",
          "body": "The enrollment record is the practice's source for the legal name, the practice locations, the specialties, and the network status. Pull the current record before looking at the directory. Compare the directory listing to that record rather than to a marketing page or an old brochure. A listing can be internally consistent and still disagree with the enrollment file. The audit needs a reliable reference point.\n\nRecord the enrollment record date and the person who confirmed it. If the practice has multiple locations or provider types, audit each combination separately. Do not assume that one corrected listing updates every location or plan. Keep the source documents with the audit sheet. A reviewer should be able to repeat the comparison without asking which record was used."
        },
        {
          "heading": "Check the fields patients actually use",
          "body": "Patients usually check the provider name, the specialty, the location, the phone number, the accepting-new-patients status, and the languages spoken. Those fields deserve a direct check even if the back-end record looks complete. A wrong phone number can send a patient to a closed line, while a wrong location can send them to an old office. Check the hours and the accessibility information as well. The listing should answer the questions a patient asks before booking.\n\nCompare the fields word for word where possible. A small difference in a suite number or a provider suffix can create a real navigation problem. Check the map pin against the written address. If the listing shows a hospital affiliation, confirm that it is still accurate. Do not add a field just because the directory allows it. Every published field should have an owner and a source."
        },
        {
          "heading": "Test the listing through the patient path",
          "body": "Search for the provider the way a patient would, using a name search, a specialty search, and a location search. Open the result and follow the phone number or booking link. Confirm that the destination matches the practice and the location. A listing that looks correct but routes to the wrong queue is still a failure. Repeat the test on a mobile screen, because that is how many patients will see it.\n\nRecord the search terms, the date, the device, and the result. If the directory has a correction form, note where it is and what evidence it requires. Do not submit a correction without a screenshot or a saved reference. After the correction appears, repeat the same search. The test should show the patient experience, not just the data record."
        },
        {
          "heading": "Record who confirmed the change",
          "body": "Every directory change should have a named confirmer, a date, and a source. The confirmer may be the credentialing lead, the practice manager, or the provider. Record which directory or plan was updated and when the update appeared. A change request is not the same as a verified listing. Keep the confirmation with the audit sheet. The record should show that someone checked the result, not only that someone sent a request.\n\nIf a payer or directory vendor controls the listing, record the case or ticket number. Follow up on the expected publication date. If the change does not appear, escalate with the original evidence. Do not keep resubmitting the same request without noting the prior attempts. A clear trail makes the delay visible and reduces duplicate work."
        },
        {
          "heading": "Recheck after a practice move or merger",
          "body": "A move, a merger, a new location, or a provider departure can invalidate several listings at once. Add a directory recheck to the event checklist for those changes. Include the phone tree, the website, the scheduling system, and the payer directories. The work should start before the change goes live, not after a patient reports a problem. A short pre-change list prevents a long cleanup later.\n\nAssign one owner for the event and one backup. Track each directory as a row with a status and a date. Do not mark the event complete until the key listings show the new information. Keep the old listing evidence in case a patient or payer asks about the transition. The recheck should cover the patient-facing path and the enrollment record together."
        },
        {
          "heading": "Put a review date on every listing",
          "body": "A listing without a review date has no reason to be checked again. Add a review date to the audit sheet and a reminder to the owner's calendar. Use a shorter interval for high-volume locations and a longer interval for stable ones. Recheck sooner after a known change or a patient complaint. The review date is a commitment, not a suggestion. It should be visible to the person who owns the work.\n\nAt each review, confirm the source record first, then the listing. Record what changed and what stayed the same. If nothing changed, say so and update the review date. A clean review is still evidence. Share the overall status with the practice lead once a quarter. The goal is a listing that patients can trust between visits, not a one-time cleanup."
        }
      ],
      "heroImage": "/images/november-7/audit-a-provider-directory-listing-before-patients-rely-on-it.webp",
      "readTime": "8 min read",
      "checklist": [
        "Use the current enrollment record as the source for the directory comparison.",
        "Check name, specialty, location, phone, hours, and accepting-new-patients status.",
        "Test the listing through name, specialty, location, phone, and mobile paths.",
        "Record the confirmer, date, directory, and case number for every change.",
        "Add a review date and an event-triggered recheck to each listing."
      ]
    },
    "image": "/images/november-7/audit-a-provider-directory-listing-before-patients-rely-on-it.webp",
    "published": "2026-11-07",
    "category": "blog"
  },
  {
    "slug": "test-a-new-billing-specialist-with-a-controlled-claim-sample",
    "title": "Test a new billing specialist with a controlled claim sample",
    "service": "billing onboarding quality",
    "description": "A controlled claim sample for onboarding billing specialists, with closed-claim selection, exception coverage, a written rubric, handoff observation, a capped review, and a retained record.",
    "details": {
      "overview": "A new billing specialist needs practice that looks like the real queue without exposing live claims to avoidable errors. A controlled claim sample gives the person a small set of closed claims with known outcomes. The reviewer can see how the specialist reads the account, documents the work, and routes an exception. The test is a teaching tool, not a pass-or-fail personality quiz.",
      "sections": [
        {
          "heading": "Build the sample from closed claims",
          "body": "Choose claims that have already been paid, denied, or closed, so a mistake in the exercise does not affect a live account. Remove or mask information the exercise does not need. Keep the claim number, the payer, the dates, and the relevant notes so the specialist can follow the story. A closed claim with a clear outcome is easier to score than a messy open case. The sample should feel like real work, not a textbook question.\n\nPick claims from different payers and service types, but keep the set small enough to review in one sitting. Six to ten claims are usually enough for a first pass. Include at least one claim that needs no action, because knowing when to stop is part of the job. Record the correct outcome for each claim before the exercise begins. The answer key should be written down, not held in the reviewer's head."
        },
        {
          "heading": "Include the exception types the role will meet",
          "body": "The sample should include the exceptions the specialist will actually see, such as a missing authorization, a denied line, a patient credit, or a claim that needs a corrected address. Do not build a sample of only clean claims. A specialist who can post a clean payment may still struggle with a denial. The exercise should show how the person reads the reason and chooses the next step. It should also show when the person stops and asks for help.\n\nLabel the expected behavior for each exception, not only the final answer. For example, the specialist may be expected to document the denial, check the appeal window, and route the clinical question to a reviewer. That sequence is more useful to observe than a single correct field. Keep the exception set aligned with the role's approved scope. Do not test work the role is not authorized to perform."
        },
        {
          "heading": "Score the work against a written rubric",
          "body": "Write a short rubric with three or four dimensions, such as accuracy, documentation, escalation judgment, and tool use. Define what a strong response looks like for each dimension. Use the same rubric for every candidate so the comparison is fair. Do not change the rubric halfway through the exercise. The rubric should separate a knowledge gap from a documentation habit.\n\nGive the specialist the rubric before the exercise. The goal is not to surprise the person but to see whether they can meet a clear standard. Score the work after the exercise, not while watching every keystroke. Add a short comment for each score so the feedback is specific. A score without an example is hard to learn from. The reviewer should be able to explain the result to the specialist in plain language."
        },
        {
          "heading": "Observe the handoff, not only the task",
          "body": "Many billing errors happen at the handoff, so include a step that requires the specialist to pass the claim to another role. The handoff note should state what was done, what is still open, and who owns the next action. Review whether the note is readable without a conversation. A specialist who completes the task but leaves a vague handoff is not ready for the live queue. The handoff is part of the work, not an afterthought.\n\nAsk the specialist to explain the handoff aloud after the exercise. Listen for the reason behind the next action and the condition that would close the item. If the explanation is clearer than the written note, the note needs a template or a checklist. Use the gap to teach the documentation standard. Do not simply tell the person to write more. Show an example and ask for a revision."
        },
        {
          "heading": "Cap the sample and review it together",
          "body": "Keep the exercise short enough to finish in one session. A tired specialist makes different mistakes than a rested one, and the reviewer needs time to give feedback. Cap the sample at a stated number of claims or minutes. Stop the exercise when the cap is reached, even if the work is unfinished. The unfinished portion is useful information about pace and prioritization. It is not a reason to extend the session without a plan.\n\nReview the sample with the specialist in a private conversation. Start with what went well, then discuss the gaps with the claim examples. Ask the specialist what they would do differently next time. Agree on one or two practice goals for the next week. The review should end with a shared understanding of the next step, not a score alone. Keep the tone factual and focused on the work."
        },
        {
          "heading": "Keep the test record after onboarding",
          "body": "Save the sample, the rubric, the scores, and the review notes in the onboarding file. The record shows what the specialist could do at the start and gives the next reviewer a baseline. Revisit it after thirty and ninety days if the role has a structured probation. Do not use the initial score as a permanent label. The point is to see progress and to target coaching.\n\nIf the specialist later moves to a new payer or service line, use a fresh sample rather than the old one. The work has changed, so the test should change too. Keep the old record for continuity and add the new one beside it. Review the sample design each year to make sure it still reflects the queue. A test that never changes will stop predicting real performance."
        }
      ],
      "heroImage": "/images/november-7/test-a-new-billing-specialist-with-a-controlled-claim-sample.webp",
      "readTime": "8 min read",
      "checklist": [
        "Use closed claims with known outcomes and mask unneeded patient information.",
        "Include exceptions the role will meet, plus at least one claim that needs no action.",
        "Write a short rubric covering accuracy, documentation, escalation, and tool use.",
        "Review the handoff note as part of the exercise, not only the final task.",
        "Cap the session and save the sample, rubric, scores, and review notes."
      ]
    },
    "image": "/images/november-7/test-a-new-billing-specialist-with-a-controlled-claim-sample.webp",
    "published": "2026-11-07",
    "category": "blog"
  }
];
