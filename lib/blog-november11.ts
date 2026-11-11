import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november11Blog: BlogPost[] = [
  {
    "slug": "build-a-patient-statement-schedule-that-survives-returned-mail",
    "title": "Build a patient statement schedule that survives returned mail",
    "service": "patient statements",
    "description": "A patient statement routine for medical billing teams, covering cycle design, address verification, returned-mail handling, alternate contact rules, dispute holds, and a monthly return-rate review.",
    "details": {
      "overview": "A patient statement that never reaches the patient looks the same in the ledger as a statement the patient ignored. Both leave the balance open, but only one is a communication failure the practice can fix. Returned mail usually points to stale registration data, a missing apartment number, or a patient who moved without telling the office. The routine below keeps the statement cycle moving while giving every returned envelope an owner and a deadline.",
      "sections": [
        {
          "heading": "Map the statement cycle before changing it",
          "body": "Write down the current cycle from the first statement to the final notice, including the day each step runs. Note the vendor, the print schedule, the payment window, and the point where the balance moves to collections or write-off. Most practices discover that two teams believe different schedules are live. Put the cycle on one page and have the billing lead approve it. Count how many days a patient actually has to respond before the next action. If the window is shorter than the practice policy promises, fix the schedule before adding more reminders. A clear baseline makes every later change measurable."
        },
        {
          "heading": "Verify the address at registration and check-in",
          "body": "Ask for the mailing address at every visit and compare it with the address on file, not just the insurance card. Read the apartment or unit number back to the patient so a missing digit is caught at the desk. Record the date the address was confirmed and the staff member who confirmed it. Give the front desk a short prompt for patients who say nothing has changed, because a quick confirmation still prevents a return. Flag addresses that look incomplete, such as a street with no unit number or a ZIP code that does not match the city. A one-minute check at check-in is cheaper than a reprinted statement and a phone call."
        },
        {
          "heading": "Use a plain envelope with a clear return address",
          "body": "Keep the outside of the envelope simple and make the practice return address legible. A window envelope that shifts during printing can hide the address or tear the statement. Use a consistent format for the patient name and the street line so the postal service can process it. Avoid abbreviations the patient did not use and avoid handwriting labels that smudge. If the practice uses a vendor, ask to see a sample envelope before the next print run. Check that the return address matches the office that will handle the reply. A clean envelope reduces both returns and misdirected payments."
        },
        {
          "heading": "Build a returned-mail queue with a deadline",
          "body": "Route every returned envelope to one queue on the day it arrives, with the account number, the reason stamped by the post office, and the date received. Assign an owner and a three-business-day deadline for the first attempt to reach the patient. Do not simply change the address and reprint, because the new address may be a guess. Check the practice management system, the registration record, and any patient portal profile for a better address. Note what was tried and what was found. A queue with a deadline turns a pile of envelopes into a short, visible worklist."
        },
        {
          "heading": "Try one approved alternate contact path",
          "body": "When mail fails, use one alternate path that the patient has already authorized, such as a phone call, a text, or a portal message. Follow the practice policy on voicemail and on how much clinical or financial detail may be left. Ask for a current mailing address and confirm it by reading it back. Record the date, the method, and the result in the account notes. Do not cycle through every channel at once, because that can feel harassing and creates duplicate work. If the patient cannot be reached after the approved attempts, move the account to the next step in the policy."
        },
        {
          "heading": "Pause statements during an active dispute",
          "body": "Put a hold on the statement cycle when a patient disputes the balance or requests an itemized review. Confirm the hold in writing and give the patient a date when the practice will respond. Continuing to send statements during a documented dispute damages trust and can complicate a later collection decision. Route the account to the billing team member who owns the review. When the review closes, document the outcome and restart the cycle only if a balance remains. If the balance changes, send a corrected statement rather than another copy of the old one. The hold is a control, not a courtesy."
        },
        {
          "heading": "Measure the return rate every month",
          "body": "Count the statements mailed and the envelopes returned, then divide to get a monthly return rate. Break the result down by reason, such as moved, insufficient address, or refused. Compare the rate with the prior month and with the vendor if the practice uses one. A sudden increase often points to a print or data problem rather than a change in the patient population. Review the five most common causes and assign one fix for the next cycle. Track whether the fix lowers the rate before adding another change. The monthly count keeps returned mail from becoming invisible again."
        }
      ],
      "heroImage": "/images/november-11/build-a-patient-statement-schedule-that-survives-returned-mail.webp",
      "readTime": "8 min read",
      "checklist": [
        "Document the full statement cycle and the patient response window.",
        "Confirm the mailing address at every visit and read the unit number back.",
        "Route every returned envelope to one queue with a three-day deadline.",
        "Hold statements during a documented dispute and confirm the hold in writing.",
        "Report the monthly return rate by reason and track one fix at a time."
      ]
    },
    "image": "/images/november-11/build-a-patient-statement-schedule-that-survives-returned-mail.webp",
    "published": "2026-11-11",
    "category": "blog"
  },
  {
    "slug": "set-an-eligibility-recheck-routine-for-high-cost-infusion-claims",
    "title": "Set an eligibility recheck routine for high-cost infusion claims",
    "service": "eligibility",
    "description": "An eligibility recheck routine for infusion billing, covering claim selection, authorization timing, field comparison, documentation, patient notification, escalation, and a monthly sample.",
    "details": {
      "overview": "A high-cost infusion claim can absorb a full day of billing work when coverage turns out to be wrong. The patient may have changed plans, the plan may require a new prior authorization, or the benefit may have a visit limit that nobody checked. A single recheck before the drug is mixed is worth more than a stack of appeals after the claim denies. The routine below focuses the recheck on the claims where the financial exposure is real.",
      "sections": [
        {
          "heading": "Choose the claims that need a recheck",
          "body": "Set a dollar threshold or a drug category that triggers a mandatory recheck, such as biologics, specialty infusions, and any regimen with a high acquisition cost. Include claims with a recent plan change, a new referring provider, or a patient who moved from commercial coverage to a marketplace plan. Do not recheck every visit, because the volume will overwhelm the team and the checks will become shallow. Publish the trigger list so scheduling and billing apply the same rule. Review the list each quarter as drug prices and payer policies change. A focused list keeps the work proportional to the risk."
        },
        {
          "heading": "Time the recheck to the authorization window",
          "body": "Run the recheck far enough before the appointment that a new authorization can still be obtained. For many infusions that means several business days, and some payers take longer during a plan year change. Put the recheck date on the scheduling record, not only in a billing queue. If the authorization expires before the appointment, move the recheck earlier rather than asking the patient to reschedule at the last minute. Record the authorization number and the approved date range. A recheck that happens after the drug is prepared cannot prevent the loss."
        },
        {
          "heading": "Compare coverage fields line by line",
          "body": "Check the plan status, the effective date, the benefit coverage, the copay or coinsurance, and the authorization requirement for the specific drug and dose. Confirm the patient is the subscriber or note the subscriber relationship and the birth date used in the lookup. Compare the result with the information on the referral and the prior authorization. Look for a plan termination, a carve-out for pharmacy benefits, or a site-of-service restriction. Save a screenshot or a reference number for the eligibility response. A field that looks correct in isolation can still be wrong for this claim."
        },
        {
          "heading": "Document the recheck result in the account",
          "body": "Write a short note with the date, the payer, the representative or portal reference, and what was confirmed. State clearly whether the service is covered, whether authorization is required, and what the patient responsibility is expected to be. If the response is ambiguous, describe the ambiguity instead of choosing the answer that lets the claim proceed. Attach the eligibility response to the account when the system allows it. The note should let another biller repeat the check without calling the payer again. Documentation is what turns a phone call into a defensible record."
        },
        {
          "heading": "Route changes to scheduling and the patient",
          "body": "Send any change in coverage, authorization, or patient cost to scheduling the same day. If the patient needs a new referral or a different site, say so before the appointment, not after the infusion. Give the patient a plain-language estimate of the expected responsibility and explain what could change it. Record that the estimate was discussed and whether the patient acknowledged it. Do not promise a final amount when the claim has not adjudicated. Early notification gives the patient a chance to plan and gives the practice a chance to avoid a write-off."
        },
        {
          "heading": "Escalate when a payer cannot confirm coverage",
          "body": "If the portal and the phone representative disagree, ask for a supervisor or a provider relations contact. Save the call reference and the name of each person who gave an answer. Send a written inquiry through the payer portal when the issue affects an upcoming high-cost service. Set a follow-up date and keep the appointment on hold until the answer is clear. Do not let an unresolved eligibility question drift into the service date. A documented escalation is also useful if the claim later denies for a coverage reason."
        },
        {
          "heading": "Audit a sample each month",
          "body": "Pull ten rechecked claims and confirm the note, the authorization, and the eligibility response are all present. Compare the expected patient responsibility with the amount actually collected. Look for claims where the recheck happened too late to change anything. Ask the scheduler whether the information arrived in time to be useful. Record the defects and fix the template or the timing before the next month. Repeat the sample after the fix and compare the results. The audit shows whether the routine is protecting revenue or only creating paperwork."
        }
      ],
      "heroImage": "/images/november-11/set-an-eligibility-recheck-routine-for-high-cost-infusion-claims.webp",
      "readTime": "8 min read",
      "checklist": [
        "Publish the drug and dollar triggers that require a recheck.",
        "Schedule the recheck early enough to obtain a new authorization.",
        "Compare plan status, benefit, authorization, and patient cost line by line.",
        "Send coverage changes to scheduling and the patient the same day.",
        "Audit ten rechecked claims monthly and fix the timing or template."
      ]
    },
    "image": "/images/november-11/set-an-eligibility-recheck-routine-for-high-cost-infusion-claims.webp",
    "published": "2026-11-11",
    "category": "blog"
  },
  {
    "slug": "run-an-eft-enrollment-cleanup-before-payments-go-paper",
    "title": "Run an EFT enrollment cleanup before payments go paper",
    "service": "payment enrollment",
    "description": "An EFT and ERA enrollment cleanup guide for billing teams, covering payer inventory, bank account matching, form renewals, ownership, test payments, and a renewal calendar.",
    "details": {
      "overview": "Electronic funds transfer is faster and easier to reconcile until an enrollment lapses and the payer quietly returns to paper checks. The switch often happens without a notice, and the practice learns about it when a check arrives weeks later or a payment posts to an old bank account. An annual cleanup finds the stale forms, the wrong account numbers, and the payers that never completed the setup. The steps below turn enrollment from a one-time project into a maintained list.",
      "sections": [
        {
          "heading": "Inventory every payer enrollment",
          "body": "Build a list of every payer that sends payments, including the ones that still pay by check. Add the enrollment status, the effective date, the bank account on file, and the person who submitted the form. Include Medicare, Medicaid, and the major commercial payers separately, because each has its own process. Mark the payers where the practice has no enrollment at all. A complete inventory is the only way to see how much revenue still moves by paper. Update the list whenever a new payer contract starts."
        },
        {
          "heading": "Match the enrollment to the bank account",
          "body": "Confirm that each enrollment points to the current practice bank account and the correct tax identification number. A form submitted before a bank change can keep sending money to a closed account. Compare the last four digits on the payer record with the account the practice uses today. Check the account name as well, because a practice that changed its legal name may need to update the enrollment. Ask the bank whether any returned deposits are waiting. Resolve a mismatch before the next payment cycle rather than after a missing deposit."
        },
        {
          "heading": "Find the forms that expire or change",
          "body": "Some payers require a new enrollment each year, and others change the form or the portal without much notice. List the expiration date or the last submission date beside each payer. Check the payer website for the current form version before resubmitting an old copy. Keep the confirmation number and the approval letter with the enrollment record. A form that was accepted once is not proof that the enrollment is still active. Review the list every quarter and refresh anything that is close to expiring."
        },
        {
          "heading": "Centralize the enrollment owner",
          "body": "Give one person responsibility for enrollment submissions and another person a backup role. The owner should know the payer portals, the bank contact, and the practice legal name used on each form. When enrollment is spread across several people, forms get submitted twice or not at all. Keep the credentials and the confirmation numbers in an approved shared location rather than in one inbox. Record who submitted each form and when. A named owner makes follow-up possible and prevents a lapse from going unnoticed."
        },
        {
          "heading": "Reconcile ERA enrollment separately",
          "body": "Electronic remittance advice is a separate enrollment from EFT, and a practice can have one without the other. Confirm that each payer sends the remittance file to the correct clearinghouse or practice management system. Check that the file is actually posting, not just arriving in a mailbox. Compare the ERA count with the EFT deposit count for the same period. A missing ERA forces manual posting and hides denials that the team should be working. Fix the enrollment before the manual backlog grows."
        },
        {
          "heading": "Test one small payment after a change",
          "body": "After any enrollment change, watch for the next payment from that payer and confirm it arrives electronically. Check the deposit amount against the remittance and the bank statement. If the payment still arrives by check, call the payer and ask whether the old enrollment is still active. Record the test result and the date. Do not assume a change worked because the form was accepted. A single small payment is the quickest proof that the setup is live."
        },
        {
          "heading": "Keep a renewal calendar",
          "body": "Put every enrollment expiration and review date on a shared calendar with a reminder thirty days ahead. Include the bank account confirmation and the ERA setup in the same calendar. Assign the reminder to the enrollment owner and the backup. Review the calendar at the start of each quarter and remove payers the practice no longer uses. A renewal that is tracked before it lapses costs minutes, while a lapse costs weeks of paper posting and reconciliation. The calendar is the simplest control in the whole process."
        }
      ],
      "heroImage": "/images/november-11/run-an-eft-enrollment-cleanup-before-payments-go-paper.webp",
      "readTime": "8 min read",
      "checklist": [
        "Inventory every payer, enrollment status, and bank account on file.",
        "Match each enrollment to the current bank account and tax identification number.",
        "Check the current form version and expiration before resubmitting.",
        "Name one enrollment owner and one backup with shared credentials.",
        "Test one small payment after every change and keep a renewal calendar."
      ]
    },
    "image": "/images/november-11/run-an-eft-enrollment-cleanup-before-payments-go-paper.webp",
    "published": "2026-11-11",
    "category": "blog"
  },
  {
    "slug": "create-a-coding-query-log-that-closes-before-the-claim-drops",
    "title": "Create a coding query log that closes before the claim drops",
    "service": "coding support",
    "description": "A coding query workflow for billing teams, covering query triggers, ownership, hold tracking, escalation, closure notes, and a monthly pattern review.",
    "details": {
      "overview": "A coding query is a question about documentation that must be answered before the claim can be coded correctly. When the query lives in an email thread or a sticky note, the claim waits, the provider forgets, and the billing team releases a guess. A query log gives every question an owner, a deadline, and a visible link to the claim it is holding. The routine below keeps queries short and keeps the revenue cycle moving.",
      "sections": [
        {
          "heading": "Open the query at the point of ambiguity",
          "body": "Create the query as soon as the coder sees documentation that does not support a specific code. Record the patient, the date of service, the provider, and the exact documentation gap. Do not wait until the end of the day, because the details fade and the claim ages. Use one log for the whole practice so queries do not split across spreadsheets. Give each query a number that connects to the claim hold. The earlier the query opens, the more time the provider has to answer before the filing deadline."
        },
        {
          "heading": "Name the owner and the response deadline",
          "body": "Assign each query to a named provider or clinical reviewer, not to a group inbox. Set a response deadline based on the payer filing limit and the practice turnaround goal. Send the query through the channel the provider actually reads, and record the date sent. If the provider is on leave, name the covering clinician in the log. A query without an owner is a task nobody has accepted. The deadline should be short enough to protect the claim and realistic enough that the provider can answer well."
        },
        {
          "heading": "Ask one specific question per query",
          "body": "Write the question so a busy clinician can answer it in a sentence or two. Quote the documentation that is unclear and state what code or detail is needed. Avoid asking the provider to choose a code, because that shifts the coding decision to the clinician. Ask for the clinical fact instead, such as the severity, the laterality, or the time spent. Include the date of service and the specific note being reviewed. A focused question gets a faster and more reliable answer than a long narrative."
        },
        {
          "heading": "Track the claim hold separately",
          "body": "Mark the claim as held in the practice management system with the query number as the reason. Review held claims every day so nothing sits past its filing limit. Separate the query log from the hold report, then reconcile the two counts weekly. A query that is marked closed while the claim is still held is a dangerous mismatch. If the claim must be released before the answer arrives, document why and who approved the release. The hold report is the financial view, while the query log is the clinical question."
        },
        {
          "heading": "Escalate queries that block revenue",
          "body": "Set an escalation rule for queries that stay open past the deadline or involve a high-dollar claim. Send a second request to the provider and copy the clinical lead. For recurring delays, raise the issue at the next provider meeting with examples rather than blame. Track the number of claims and the dollars held by provider so the conversation has facts. Escalation should shorten the wait, not create a longer paper trail. If a provider repeatedly misses queries, involve the compliance or revenue cycle owner."
        },
        {
          "heading": "Close with the answer and the rationale",
          "body": "When the answer arrives, record the response in the query log and update the claim. Note the code selected and the documentation that supports it, so a later reviewer can follow the decision. Close the query only after the claim is released or the hold is updated. If the answer changes the code, check whether a corrected claim is needed. Do not paraphrase the provider beyond what the note supports. A complete closure record protects the practice in an audit and helps the next coder learn."
        },
        {
          "heading": "Review query patterns by provider",
          "body": "At the end of each month, group the queries by provider, service line, and documentation gap. Look for repeat questions that a template or a short education session could prevent. Share the pattern with the provider in a private review rather than a public scorecard. Measure the average response time and the share of queries that closed before the filing limit. Pick one recurring gap and fix the documentation prompt at the source. The goal is fewer queries over time, not a longer log."
        }
      ],
      "heroImage": "/images/november-11/create-a-coding-query-log-that-closes-before-the-claim-drops.webp",
      "readTime": "8 min read",
      "checklist": [
        "Open a numbered query as soon as the documentation gap appears.",
        "Assign a named provider owner and a deadline tied to the filing limit.",
        "Ask for one clinical fact instead of asking the provider to pick a code.",
        "Reconcile the query log with the claim hold report every week.",
        "Review monthly patterns by provider and fix one documentation prompt."
      ]
    },
    "image": "/images/november-11/create-a-coding-query-log-that-closes-before-the-claim-drops.webp",
    "published": "2026-11-11",
    "category": "blog"
  },
  {
    "slug": "set-a-small-balance-write-off-policy-with-an-approval-trail",
    "title": "Set a small-balance write-off policy with an approval trail",
    "service": "revenue cycle",
    "description": "A small-balance write-off policy for medical practices, covering thresholds, collection attempts, adjustment versus write-off, approval evidence, period posting, and reporting.",
    "details": {
      "overview": "Small balances are easy to write off and hard to explain later. A policy that says staff may clear anything under a set amount without a record invites inconsistent decisions and hides real collection problems. The practice needs a threshold, a required attempt, a named approver, and a report that shows what was cleared and why. The routine below keeps small balances from becoming an invisible expense.",
      "sections": [
        {
          "heading": "Define the threshold and the exceptions",
          "body": "Set a dollar threshold below which a balance may be written off after the required attempts. State the exceptions clearly, such as a balance tied to an open appeal, a bankruptcy, or a patient who has requested a review. A threshold should apply to the remaining patient responsibility, not to the original charge. Publish the policy so the front desk and the billing team apply the same rule. Review the threshold each year against the cost of collecting a small balance. The goal is a defensible rule, not the lowest possible write-off number."
        },
        {
          "heading": "Require a collection attempt before write-off",
          "body": "Document at least the statements and contact attempts the policy requires before a balance is eligible. Record the dates and the result of each attempt in the account. A balance that was never billed should not be written off, because the patient may still owe it and may still pay. Check for an available address or phone number before concluding the patient cannot be reached. If the patient has a documented hardship, route the account to the financial assistance policy instead. The attempt record is the evidence that the write-off was a decision, not an oversight."
        },
        {
          "heading": "Separate write-off from adjustment",
          "body": "A write-off removes a balance the practice has decided not to collect, while an adjustment corrects a contractual or billing error. Mixing the two makes the revenue report misleading. Use distinct adjustment codes and a required reason for each. A payer contractual adjustment should never be posted as a small-balance write-off. Train the team on the difference and review a sample of each code monthly. Clean categories let the practice see whether the problem is uncollected patient debt or a pricing error."
        },
        {
          "heading": "Name the approver and the evidence",
          "body": "Require a named approver for every write-off above a small clerical level, and record the approval date. For balances below that level, require a batch approval with a report the manager reviews. Keep the request, the attempt history, and the approval together in the account or an attached log. Do not let the person who posts the write-off also approve it without a review. The approval trail should answer who decided, when, and on what evidence. A clear trail makes an audit a short exercise instead of a reconstruction."
        },
        {
          "heading": "Post the write-off in the same period",
          "body": "Post the write-off in the accounting period when the decision was made, not months later when someone remembers. A delayed write-off distorts the month it lands in and hides the trend. Reconcile the write-off log with the general ledger at month end. Investigate any amount that appears in one record but not the other. Keep the write-off date and the date of the last collection attempt visible. Timely posting keeps the financial statements honest and makes the monthly review meaningful."
        },
        {
          "heading": "Report write-offs by payer and reason",
          "body": "Produce a monthly report that groups write-offs by payer, service line, reason, and dollar amount. Compare the total with the prior month and with the same month last year. Look for a cluster that points to a process problem, such as a registration error or a missed statement. Share the report with the billing lead and the practice manager. Do not use the report to rank individual staff unless the pattern clearly supports it. The purpose is to find the source and reduce the next month's loss."
        },
        {
          "heading": "Review the policy twice a year",
          "body": "Review the threshold, the attempt requirements, and the approval levels every six months. Check whether the cost of collecting a small balance has changed and whether the policy still matches the practice payer mix. Ask the billing team where the policy creates friction or confusion. Update the written policy and retrain the staff on any change. Keep the old versions so an auditor can see what rule applied to a past account. A policy that is never reviewed slowly stops matching the work."
        }
      ],
      "heroImage": "/images/november-11/set-a-small-balance-write-off-policy-with-an-approval-trail.webp",
      "readTime": "8 min read",
      "checklist": [
        "Publish a dollar threshold, exceptions, and the patient responsibility basis.",
        "Require documented statements and contact attempts before write-off.",
        "Use separate codes and reasons for write-offs and adjustments.",
        "Record the approver, date, and evidence for every write-off.",
        "Report monthly by payer and reason, and review the policy twice a year."
      ]
    },
    "image": "/images/november-11/set-a-small-balance-write-off-policy-with-an-approval-trail.webp",
    "published": "2026-11-11",
    "category": "blog"
  },
  {
    "slug": "build-a-payer-escalation-ladder-for-claims-stuck-past-thirty-days",
    "title": "Build a payer escalation ladder for claims stuck past thirty days",
    "service": "accounts receivable",
    "description": "A payer escalation workflow for aged claims, covering clean claim checks, call references, tiered follow-up, portal evidence, promises, and resolution codes.",
    "details": {
      "overview": "An aged claim rarely resolves because someone called once and left a note. It resolves when the practice follows a defined ladder, records what the payer said, and moves to the next level on schedule. Without that structure, the same claim is called repeatedly by different people and the answer never sticks. The ladder below gives every claim past thirty days a path and a deadline.",
      "sections": [
        {
          "heading": "Start with the clean claim check",
          "body": "Before escalating, confirm the claim was submitted correctly and accepted by the payer. Check the patient identifiers, the provider number, the diagnosis pointers, and the filing date. Pull the clearinghouse acknowledgment and any payer rejection. A claim that was never accepted is not stuck at the payer, it is stuck at the practice. Fix the submission issue and resend before starting the escalation clock. Escalating a claim with a known defect wastes the payer call and delays the real fix."
        },
        {
          "heading": "Log the first call and the reference number",
          "body": "Record the date, the representative name, the call reference, and the exact status the payer reports. Ask whether the claim is pending, denied, or missing, and write the answer in the payer's words. Note any request for additional information and the date it was received. Set a follow-up date before ending the call. A reference number turns a vague memory into a traceable event. Without it, the next caller starts from zero and the claim ages further."
        },
        {
          "heading": "Escalate by tier on a fixed schedule",
          "body": "Define tiers such as a first-line representative, a supervisor, a provider relations contact, and a written complaint. Set the number of business days between each tier and apply it consistently. Do not jump to the top tier on the first call, because the higher levels expect the lower steps to be documented. At each tier, record the new reference and the answer. If a tier does not respond by the deadline, move to the next one. A fixed schedule keeps claims moving without relying on memory."
        },
        {
          "heading": "Use the portal and the phone together",
          "body": "Submit the inquiry through the payer portal when one exists and save the confirmation. Follow up by phone to confirm the portal case is linked to the claim. Some payers respond faster in writing, while others resolve issues only on a call. Keep both records in the account so the evidence is complete. Do not assume a portal submission was worked because it shows as received. Check the case status on the next follow-up date and note the result."
        },
        {
          "heading": "Document what the payer promises",
          "body": "Write down the specific commitment, such as a reprocessing date, a payment amount, or a request for records. Include who made the promise and when. A general statement that the claim is in process is not a commitment and should not reset the follow-up clock. If the payer promises a date, put it in the account and check it. When the date passes without action, escalate to the next tier. Specific notes make it clear whether the payer is moving or stalling."
        },
        {
          "heading": "Move to a supervisor or provider representative",
          "body": "Ask for a supervisor when the first-line answer conflicts with the policy or the claim history. For contract and payment issues, ask for the provider relations or network representative. Prepare a short summary with the claim number, the dates, the amounts, and the prior reference numbers. A concise summary gets a faster response than a long narrative. Record the name and the outcome of the escalation. If the issue affects multiple claims, raise the pattern rather than one claim at a time."
        },
        {
          "heading": "Close the escalation with a resolution code",
          "body": "When the claim pays, denies, or is corrected, close the escalation with a resolution code such as paid, reprocessed, denied, or written off. Record the final amount and the date. If the claim was denied, route it to the appeal or correction workflow rather than leaving it in the escalation queue. Review the closed claims monthly for repeat causes by payer and service line. A resolution code turns a pile of notes into data the practice can act on."
        }
      ],
      "heroImage": "/images/november-11/build-a-payer-escalation-ladder-for-claims-stuck-past-thirty-days.webp",
      "readTime": "8 min read",
      "checklist": [
        "Confirm the claim was accepted before starting an escalation.",
        "Log the call date, representative, reference number, and payer status.",
        "Apply fixed tier deadlines and move up when a tier does not respond.",
        "Use the portal and the phone together and keep both confirmations.",
        "Close every escalation with a resolution code and a final amount."
      ]
    },
    "image": "/images/november-11/build-a-payer-escalation-ladder-for-claims-stuck-past-thirty-days.webp",
    "published": "2026-11-11",
    "category": "blog"
  },
  {
    "slug": "run-a-monthly-underpayment-review-against-contract-terms",
    "title": "Run a monthly underpayment review against contract terms",
    "service": "contract management",
    "description": "A monthly underpayment review for medical billing, covering contracted rates, allowed amount comparison, shortfall grouping, recovery decisions, and contracting feedback.",
    "details": {
      "overview": "An underpayment is easy to miss because the claim paid and the balance closed. The payment only becomes a problem when someone compares the allowed amount with the contracted rate and finds the difference. A monthly review catches the pattern before it compounds across a year of claims. The routine below shows how to pick the services, compare the right fields, and turn the findings into a recovery or a contract conversation.",
      "sections": [
        {
          "heading": "Pull the contracted rate for the top services",
          "body": "Start with the services that generate the most revenue or the most claims, such as the top twenty procedure codes. Find the contracted rate in the fee schedule and note the effective date. If the contract uses a percentage of Medicare, record the Medicare rate and the calculation. Keep the rate sheet in one place and update it when a contract changes. A review built on an old rate sheet will produce false shortfalls. Confirm the rate with the payer when the contract language is unclear."
        },
        {
          "heading": "Compare allowed amounts, not just payments",
          "body": "Use the allowed amount from the remittance, then subtract the patient responsibility to see what the payer actually recognized. A payment can look correct while the allowed amount is below contract. Compare the allowed amount with the contracted rate for the same code, modifier, and place of service. Watch for multiple procedure reductions and modifier rules that change the expected amount. Do not compare a single payment with a full fee schedule without applying the contract logic. The allowed amount is the field that reveals the underpayment."
        },
        {
          "heading": "Isolate the claims that fall short",
          "body": "Build a list of claims where the allowed amount is below the contracted rate by more than a small tolerance. Include the patient, the date of service, the code, the expected amount, and the paid amount. Exclude claims with a documented reason for the difference, such as a sequester adjustment or a patient eligibility change. Review the list for a pattern before contacting the payer. One claim may be a data error, while ten claims in a month may be a loaded fee schedule. The isolated list is the evidence for the next step."
        },
        {
          "heading": "Group shortfalls by payer and code",
          "body": "Sort the list by payer, then by code, then by date. Look for a code that pays incorrectly across many claims or a payer that applies the wrong rate to a whole service line. Check whether the shortfall started on a specific date, which may point to a contract renewal or a system change. Count the dollars and the claims in each group. A group with a consistent pattern is stronger than a set of unrelated one-off differences. The grouping tells the practice where to spend its recovery effort."
        },
        {
          "heading": "Decide between a rebill and a formal appeal",
          "body": "Use a corrected claim when the original submission had an error that caused the underpayment. Use a formal appeal or a contract dispute when the claim was coded correctly and the payer applied the wrong rate. Do not rebill a claim that will simply pay the same way again. Check the payer appeal window and the required documentation before submitting. Keep the original remittance and the corrected claim together. The decision should match the cause, not the size of the difference."
        },
        {
          "heading": "Track recoveries from underpayment claims",
          "body": "Log every underpayment claim sent for correction or appeal, with the amount requested and the date. Follow up on the same schedule as other aged claims. Record the amount recovered and the amount still open. Compare the recovery with the cost of the review to see whether the effort is worthwhile. A small shortfall on a high-volume code can be worth more than a large shortfall on a rare service. Report the recovery rate by payer and by code group each month."
        },
        {
          "heading": "Share the findings with contracting",
          "body": "Send a short quarterly summary to the person who negotiates payer contracts. Include the payer, the code group, the expected rate, the observed rate, and the dollars affected. Contracting can use the evidence at renewal or raise it with the payer representative. Do not wait until the contract expires to report a rate that has been wrong for a year. Keep the summary factual and separate from any single claim dispute. The review is most valuable when it changes the next contract, not only the last payment."
        }
      ],
      "heroImage": "/images/november-11/run-a-monthly-underpayment-review-against-contract-terms.webp",
      "readTime": "8 min read",
      "checklist": [
        "Use the current contracted rate for the top twenty procedure codes.",
        "Compare the allowed amount after patient responsibility with the contract rate.",
        "Isolate shortfalls and group them by payer, code, and start date.",
        "Choose a corrected claim or a formal appeal based on the cause.",
        "Track recoveries and send a quarterly summary to contracting."
      ]
    },
    "image": "/images/november-11/run-a-monthly-underpayment-review-against-contract-terms.webp",
    "published": "2026-11-11",
    "category": "blog"
  },
  {
    "slug": "give-telehealth-claims-a-place-of-service-check-before-submission",
    "title": "Give telehealth claims a place-of-service check before submission",
    "service": "telehealth billing",
    "description": "A telehealth claim check for billing teams, covering payer coverage, place of service, modifier pairs, originating site rules, consent records, and denial review.",
    "details": {
      "overview": "Telehealth claims fail for reasons that are visible before submission if someone looks. The payer may not cover the modality, the place of service may not match the site, or the modifier pair may be wrong for the service. A short check at the claim level prevents most of these denials and costs less than an appeal. The routine below gives the billing team a consistent set of questions to ask before a telehealth claim leaves the queue.",
      "sections": [
        {
          "heading": "Confirm the payer covers the modality",
          "body": "Check the payer policy for the specific service, not just for telehealth in general. Some payers cover video visits but not audio-only, and some cover a service only for certain diagnoses. Confirm the policy is current for the date of service, because telehealth rules change often. Record the policy reference and the date checked. If the payer does not cover the service, tell the patient before the visit when possible. A coverage check at the claim level is the last chance to avoid a predictable denial."
        },
        {
          "heading": "Match the place of service to the site",
          "body": "Use the place of service that reflects where the service was delivered under the payer rules. Medicare and many commercial payers treat the home and a clinic differently for telehealth. Check whether the claim should use the originating site or the distant site code. Look at the documentation to confirm where the patient actually was during the visit. A place of service that contradicts the note is a denial waiting to happen. Set a default in the system but require the biller to confirm it for each modality."
        },
        {
          "heading": "Check the modifier pair",
          "body": "Confirm the modifier that identifies the telehealth service and the modifier that describes the site or the service. Some payers require a single modifier, while others require a pair in a specific order. Check the payer policy and the current coding guidance for the exact combination. Apply the modifier only when the service meets the definition, not as a default for every video visit. A missing or extra modifier changes the payment and can trigger an edit. Review a sample of modifier pairs each month against the payer rules."
        },
        {
          "heading": "Verify the originating and distant site rules",
          "body": "For services that use an originating site, confirm the site is eligible and the patient was present there. For distant site claims, confirm the provider was authorized to furnish the service by telehealth. Check the geographic and practitioner rules that apply to the payer and the date of service. Do not assume a rule from last year still applies, because temporary policies may have expired. Record the rule source in the billing notes for claims that are unusual. The site rules determine both coverage and payment."
        },
        {
          "heading": "Hold claims with a missing consent record",
          "body": "Confirm the patient consented to telehealth and that the consent is documented in the record. Some payers require a specific consent form, while others accept a note in the chart. Check the date of consent and whether it covers the current visit or the full course of care. If the consent is missing, hold the claim and ask the clinical team to obtain it. Do not add a consent statement the patient did not give. A held claim is better than a claim that misrepresents the encounter."
        },
        {
          "heading": "Review telehealth denials weekly",
          "body": "Group telehealth denials by reason, such as no coverage, wrong place of service, missing modifier, or site ineligibility. Count the denials and the dollars for each group. Pick the largest preventable group and fix the check that should have caught it. Share the pattern with the billing team and, when relevant, with the clinical team. Recheck the same group the following week to see whether the fix worked. A weekly review keeps a small coding issue from turning into a month of denials."
        },
        {
          "heading": "Update the check when rules change",
          "body": "Assign one person to watch payer telehealth policy changes and update the check sheet. Record the effective date beside each rule so the team knows which version applies to a given service date. Remove outdated rules instead of stacking new ones on top. Train the billing team when a change affects the workflow. Keep a short change log that shows what changed and when. A check sheet that is reviewed quarterly stays useful, while an old one creates false confidence."
        }
      ],
      "heroImage": "/images/november-11/give-telehealth-claims-a-place-of-service-check-before-submission.webp",
      "readTime": "8 min read",
      "checklist": [
        "Confirm payer coverage for the specific service and date of service.",
        "Match the place of service to where the patient actually was.",
        "Verify the required modifier pair against the current payer policy.",
        "Hold claims with a missing or unclear telehealth consent record.",
        "Review denials weekly and update the check sheet when rules change."
      ]
    },
    "image": "/images/november-11/give-telehealth-claims-a-place-of-service-check-before-submission.webp",
    "published": "2026-11-11",
    "category": "blog"
  }
];
