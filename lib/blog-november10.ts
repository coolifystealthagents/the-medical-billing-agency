import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november10Blog: BlogPost[] = [
  {
    "slug": "set-a-collection-agency-referral-packet-that-survives-review",
    "title": "Set a collection agency referral packet that survives review",
    "service": "collections",
    "description": "A referral packet routine for medical billing teams, covering balance selection, account evidence, patient contact records, placement terms, recall rules, and a first-batch audit.",
    "details": {
      "overview": "A collection agency referral moves a patient balance out of the practice and into a process the practice no longer controls. When the packet is thin, the agency returns the account, the patient disputes the debt, or the balance ages past the point where anyone can explain it. A referral packet should read like a small case file that another reviewer could defend without calling the billing office. The routine below keeps the decision, the evidence, and the recall terms together before an account leaves the building.",
      "sections": [
        {
          "heading": "Decide which balances belong in a referral",
          "body": "Start with a written placement rule that names the minimum age, the minimum dollar amount, and the collection attempts required before referral. Exclude balances tied to an open insurance appeal, a pending eligibility correction, or a documented payment plan that is currently being honored. A balance that may still change should not be sent to an agency, because the practice loses the ability to correct it cleanly. Review the rule with the finance owner once a year and after any major payer contract change. Sort the candidate list by age and by dollar value so the team can see what the rule actually captures. Flag accounts with a bankruptcy indicator, a legal hold, or a recent complaint before placement, because those need a different path. Keep a short exclusion log that records why each held account stayed with the practice. The log protects the team when a manager asks why a large balance was never placed."
        },
        {
          "heading": "Assemble the account evidence file",
          "body": "Build one packet per account with the patient statement history, the service dates, the charges, the payments, and the current balance. Add the assignment of benefits, the financial responsibility form, and any payment plan agreement the patient signed. Include the last itemized statement and the date it was sent, because the agency will need it to answer a validation request. A packet that cannot show how the balance was calculated invites a dispute. Attach the claim history rather than a single claim printout. Show the original submission, any denial, the appeal outcome, and the final patient responsibility amount. If the balance came from a copay or deductible, include the remittance line that established the amount. The reviewer should be able to follow the money from the payer payment to the open patient balance without guessing."
        },
        {
          "heading": "Document the patient contact trail",
          "body": "Record every statement, call, text, and portal message in one contact log with a date and a result. Note whether the patient answered, whether the number was disconnected, and whether a message was left. If the practice uses a patient portal, export the read receipt or the message thread rather than describing it from memory. The agency needs a factual trail, not a summary written after the fact. Include the patient response when there is one, even if the response was a dispute or a request for time. A patient who asked for a payment plan and never received an answer should not be referred until that request is resolved. Write the final contact attempt in plain language and name the staff member who made it. The contact trail is often the first thing a patient challenges when a collection notice arrives."
        },
        {
          "heading": "Set the placement and recall terms",
          "body": "Write the placement agreement so the agency knows what it may collect, what it may say, and when it must return the account. State the fee, the remittance schedule, and the point at which the practice considers an account closed. Define a recall trigger for a paid-in-full account, a bankruptcy filing, or a patient who returns with a valid insurance issue. The practice should be able to pull an account back without negotiating with the agency. Set a review date at thirty, sixty, and ninety days after placement. At each review, compare the agency status report with the practice ledger and ask about accounts with no activity. Require the agency to return accounts that have produced no payment and no documented contact after the agreed period. A recall rule keeps stale balances from sitting at the agency indefinitely and keeps the practice ledger honest."
        },
        {
          "heading": "Audit the first referral batch",
          "body": "Pull ten accounts from the first batch and rebuild each packet as if you were the reviewer. Check that the balance math is right, the contact log is complete, and the placement rule was followed. Call the agency and ask how it would answer a validation letter for one of the accounts. If the agency cannot find the evidence quickly, the packet is not ready for a larger batch. Record what the sample found and fix the template before the next placement. Common fixes include a missing itemized statement, a contact log with no dates, and a balance that still included a pending insurance adjustment. Repeat the sample after the fix and compare the defect rate. A small first batch with a real audit is safer than a large batch that teaches the agency to expect incomplete files."
        },
        {
          "heading": "Keep the agency file current",
          "body": "Update the placement file whenever the patient pays, disputes, or supplies new insurance. Send the update to the agency the same week so it does not pursue a balance the practice has already resolved. Record the update date and the agency acknowledgment. A stale file creates duplicate calls and sometimes a duplicate payment. Review the agency status report against the practice ledger at every scheduled check. Reconcile the payments the agency reports with the cash the practice received and the fees it was charged. Ask about any account that shows activity in one record but not the other. The reconciliation is how the practice knows the file is still accurate."
        },
        {
          "heading": "Review the referral fee against recoveries",
          "body": "Compare the fees paid to the agency with the recoveries received over a full quarter. Include the accounts that were recalled and the balances that were written off after placement. A low recovery rate may reflect poor placement quality, a weak patient contact trail, or a book of very old balances. Look at the cause before changing the agency. Check whether the fee applies to the gross recovery or the net after a patient refund or a payer takeback. A fee on money the practice later returns is a cost without a benefit. Ask for a sample of fee calculations and recompute them. If the contract is unclear, resolve it before the next placement cycle rather than after another quarter."
        }
      ],
      "heroImage": "/images/november-10/set-a-collection-agency-referral-packet-that-survives-review.webp",
      "readTime": "8 min read",
      "checklist": [
        "Publish the placement rule with an age, amount, and contact minimum.",
        "Verify the balance math and attach the full claim and payment history.",
        "Keep a dated contact log for every statement, call, and portal message.",
        "Write recall triggers and review agency status at thirty, sixty, and ninety days.",
        "Audit ten accounts from the first batch before scaling the referral volume."
      ]
    },
    "image": "/images/november-10/set-a-collection-agency-referral-packet-that-survives-review.webp",
    "published": "2026-11-10",
    "category": "blog"
  },
  {
    "slug": "build-a-point-of-service-cash-posting-routine-that-matches-the-day-sheet",
    "title": "Build a point-of-service cash posting routine that matches the day sheet",
    "service": "patient payments",
    "description": "A point-of-service cash routine for medical practices, covering separated duties, drawer reconciliation, card and cash differences, patient receipts, and a second-count close.",
    "details": {
      "overview": "Point-of-service cash is small, frequent, and easy to lose track of. A copay collected at the front desk can sit in a drawer, post to the wrong account, or never reach the ledger at all. The fix is not a stricter reminder but a daily routine with separated duties and a reconciliation that happens before the deposit leaves. The steps below make the day sheet and the cash drawer agree while the visit details are still fresh.",
      "sections": [
        {
          "heading": "Separate collection from posting",
          "body": "Have one person collect and another person post when staffing allows. The collector records the amount, the patient, and the method on a receipt log, while the poster applies the payment to the account in the practice management system. Separation makes it harder for a single person to hide a missing payment and easier to find an honest mistake. In a small office, rotate the roles or have the manager perform the second step. Give every payment a receipt number that appears on both the log and the system entry. The receipt should show the date, the patient name, the amount, the method, and the staff member who took the money. Do not allow a payment to be posted without a receipt number, even when the patient is well known. The number is the thread that connects the cash in the drawer to the credit on the account."
        },
        {
          "heading": "Reconcile the drawer to the day sheet",
          "body": "Count the drawer at the same time every day and record the count on a signed sheet. Compare the cash, checks, and card totals with the day sheet and the practice management report. List each difference by payment method instead of netting them into one amount. A drawer that is over by five dollars and short by five dollars is not balanced, because two errors are hiding each other. Investigate differences the same day while the front desk still remembers the visits. A missing copay is usually a skipped collection, a duplicate entry, or a payment posted to the wrong patient. Write the cause on the reconciliation sheet and note the correction. Keep the sheet with the deposit record so the month-end review can trace a pattern instead of starting over."
        },
        {
          "heading": "Handle card and cash differences",
          "body": "Reconcile card batches against the processor settlement, not only against the day sheet. A card payment can be approved at the desk and settle for a different amount after a tip or a partial reversal. Record the batch number and the settlement date beside the daily total. If the processor shows a chargeback or a decline that the desk did not see, flag it for follow-up before the patient is billed again. Treat a cash shortage and a cash overage with the same documentation. Ask the staff member to write what happened and who was present, without accusing anyone. Look for a pattern across days and shifts before deciding whether the issue is training, process, or something more serious. A calm, documented response finds more errors than a public warning at the front desk."
        },
        {
          "heading": "Record a patient receipt for every payment",
          "body": "Print or send a receipt that the patient can keep, and store a copy in the practice record. The receipt should match the amount posted and show the remaining balance when the system can produce it. A patient who later disputes a payment will rely on the receipt, so the date and the method matter. Do not describe a payment as a deposit when it is a payment in full. Explain the receipt at the desk in one sentence and point out the balance line. If the patient asks why the amount differs from an estimate, route the question to the billing team rather than guessing. Keep a note in the account when a patient requests a different receipt format or a payment history. These small records reduce calls and give the billing team a clean starting point."
        },
        {
          "heading": "Close the day with a second count",
          "body": "Have a second person count the drawer at close and initial the reconciliation sheet. The second count is a control, not a sign of distrust, and it should take only a few minutes. Confirm that the deposit bag matches the reconciled total and that the bag is stored in the approved place. Record the time of the count and the names of both people. At the end of the week, review the daily sheets for repeated differences and unanswered questions. Send the weekly summary to the practice manager with the deposit totals and the open items. If a difference remains unresolved, keep it on the list until someone closes it with evidence. A clean daily close makes the monthly bank reconciliation a short task instead of an investigation."
        },
        {
          "heading": "Train the front desk on receipt language",
          "body": "Give the front desk a short script that explains what the payment covers, what the receipt shows, and what balance remains. Practice the script during onboarding and refresh it when the practice changes its payment policy. The goal is a consistent explanation, not a memorized sales pitch. A patient who understands the receipt is less likely to call the billing office later. Include the difference between a copay, a deposit, and a payment in full. Staff should never call a partial payment a deposit unless the practice actually holds it for a future service. When the patient asks about insurance, route the question to the billing team instead of estimating. Clear language at the desk prevents many disputes."
        },
        {
          "heading": "Handle a payment correction without losing the trail",
          "body": "When a payment posts to the wrong patient, reverse it with a reason and repost it to the correct account the same day. Keep the original receipt number and add the correction reference so the two entries stay linked. Notify the patient only if the correction changes the balance they were told. A silent correction can confuse the next statement. Do not delete a payment or overwrite the original entry. The audit trail should show what happened, who corrected it, and why. At the daily close, list corrections beside the drawer reconciliation. A pattern of corrections may point to a registration or search problem that training can fix."
        }
      ],
      "heroImage": "/images/november-10/build-a-point-of-service-cash-posting-routine-that-matches-the-day-sheet.webp",
      "readTime": "8 min read",
      "checklist": [
        "Separate the person who collects cash from the person who posts it.",
        "Give every payment a receipt number that appears in both the log and the system.",
        "Count the drawer at the same time daily and list differences by method.",
        "Reconcile card batches to processor settlement, not only to the day sheet.",
        "Require a second count and initials before the deposit leaves the office."
      ]
    },
    "image": "/images/november-10/build-a-point-of-service-cash-posting-routine-that-matches-the-day-sheet.webp",
    "published": "2026-11-10",
    "category": "blog"
  },
  {
    "slug": "answer-a-payer-refund-request-with-an-evidence-trail",
    "title": "Answer a payer refund request with an evidence trail",
    "service": "payer refunds",
    "description": "A payer refund response routine for billing teams, covering request logging, overpayment verification, rebill risk, response deadlines, and ledger reconciliation.",
    "details": {
      "overview": "A payer refund request arrives as a short letter or an electronic notice, but it can undo a clean claim if the practice answers without checking the facts. Sometimes the payer is right and a duplicate payment needs to be returned. Sometimes the request is based on a reprocessed claim, and the practice should correct the account instead of sending money back. The routine below gives every request an owner, an evidence check, and a dated response.",
      "sections": [
        {
          "heading": "Log the refund request on arrival",
          "body": "Create a queue item the day the request arrives, with the payer, the claim number, the amount, and the reason the payer gives. Attach the letter or the electronic notice and record the response deadline. Assign one owner and one backup so the request does not wait for a vacation or a busy week. A request that sits in an inbox is not being worked, even if someone remembers it. Sort the queue by deadline and by dollar amount, then by payer. A small request from a payer with a short window can be more urgent than a large request with a month to answer. Flag any request that names a patient or a service the practice does not recognize. Those need identity and claim verification before anyone discusses a refund."
        },
        {
          "heading": "Confirm the overpayment before returning money",
          "body": "Pull the original claim, the remittance, and the posting history for the exact claim number. Confirm that the payer paid more than the allowed amount, or that the same service was paid twice. Compare the payment date, the check or electronic trace number, and the amount posted. A refund sent before this check can create a debit balance that is harder to recover than the original overpayment. Check whether the payer already took the money back through a recoupment or an offset. A refund request and a recoupment can arrive for the same claim, and paying both returns the money twice. Record the trace number and the recovery method in the queue item. If the payer cannot supply a trace, ask for it in writing before releasing any funds."
        },
        {
          "heading": "Check for a pending rebill or adjustment",
          "body": "Look for a corrected claim, an appeal, or an adjustment that is still open on the same account. A payer may request a refund because it reprocessed the claim, while the practice is still waiting for the corrected version to pay. Refunding in that situation leaves the practice with an unpaid service and a patient balance that may not be collectible. Route the request to the correction owner before approving a refund. Review the patient responsibility if the overpayment involved a secondary payer or a patient payment. A refund to the payer may need a matching adjustment to the patient balance so the account does not show a credit. Document the order of the adjustments and the date they posted. The ledger should tell the same story as the refund check."
        },
        {
          "heading": "Respond to the payer within its window",
          "body": "Send a written response that states what the practice found, what it will refund, and when. If the practice disagrees, explain the basis and attach the remittance or the contract line that supports the position. Keep the response short and factual, and send it through the channel the payer specified. A phone call can resolve a question, but the written response is the record. Record the sent date, the method, and the name of the person who sent it. Set a follow-up date to confirm the payer received the response and processed the refund. If the payer repeats the request, reply with the earlier response and the trace instead of starting over. A documented answer shortens the next exchange."
        },
        {
          "heading": "Reconcile the refund against the ledger",
          "body": "Post the refund to the same claim and the same service line that created the overpayment. Match the refund amount to the bank or clearinghouse transaction and clear the queue item only when both records agree. If the refund was partial, leave a note that explains the remainder. An open queue item with no balance behind it is a sign the posting is incomplete. At month end, compare the refund log with the cash disbursement report and the payer statements. Investigate any refund that appears in one record but not the other before closing the period. Report the count, the dollars, and the average response time to the billing lead. A short monthly review keeps refund requests from becoming a hidden backlog."
        },
        {
          "heading": "Keep the payer contact record searchable",
          "body": "Store the refund request by claim number and by payer reference so any team member can find it. Add the response date, the contact name, and the channel used. If the payer calls, record the call reference in the same place as the written request. A queue that depends on one person’s inbox is not a control. Use a consistent subject line on email responses that includes the claim number and the refund amount. Attach the remittance and the response letter together. When a payer sends a second notice, link it to the original item instead of opening a new one. The history should read as one conversation."
        },
        {
          "heading": "Review repeat refund requests by payer",
          "body": "At quarter end, count refund requests by payer and by reason. A payer that repeatedly requests the same overpayment may have a processing problem, while a spike across payers may point to a practice posting error. Read a sample of each pattern before drawing a conclusion. The count is a starting point, not a verdict. Share the pattern with the billing lead and the payer representative. Ask whether the payer can suppress duplicate requests or send a claim-level file the practice can reconcile. If the practice caused the overpayment, fix the posting rule. If the payer caused it, document the pattern and keep the evidence for the next contract discussion."
        }
      ],
      "heroImage": "/images/november-10/answer-a-payer-refund-request-with-an-evidence-trail.webp",
      "readTime": "8 min read",
      "checklist": [
        "Log every payer refund request with a deadline and a named owner.",
        "Verify the overpayment against the claim, remittance, and posting history.",
        "Check for an open rebill, appeal, or recoupment before releasing funds.",
        "Send a written response through the payer channel and keep the proof.",
        "Reconcile each refund to the ledger and the bank before closing the item."
      ]
    },
    "image": "/images/november-10/answer-a-payer-refund-request-with-an-evidence-trail.webp",
    "published": "2026-11-10",
    "category": "blog"
  },
  {
    "slug": "run-a-claim-correction-workflow-when-a-payer-reprocesses-a-visit",
    "title": "Run a claim correction workflow when a payer reprocesses a visit",
    "service": "claim corrections",
    "description": "A corrected-claim workflow for billing teams, covering reprocess detection, correction versus appeal, clean replacement claims, adjudication tracking, and ledger closeout.",
    "details": {
      "overview": "A payer reprocesses a visit for many reasons, including a corrected diagnosis, a changed procedure code, or a coordination-of-benefits update. The reprocess can create a new payment, a takeback, or a denial on a claim the practice thought was closed. Without a correction workflow, the team either resubmits blindly or leaves the account in a confusing balance. The routine below turns a reprocess into a controlled replacement claim with a clear ending.",
      "sections": [
        {
          "heading": "Detect the reprocessed claim",
          "body": "Watch the remittance for a claim number that already paid and now shows a new adjudication. Compare the new allowed amount, the paid amount, and the patient responsibility with the original. A small change may need only an adjustment, while a full reversal needs a replacement claim. Record the reprocess date and the reason code beside the original entry. Run a weekly report of claims with more than one adjudication in the payer system. Sort by payer and by dollar change so the largest and most frequent reprocesses surface first. Ask the clearinghouse whether it can flag replacement claims automatically. A manual report is better than no report, but an automated flag saves the team from relying on memory."
        },
        {
          "heading": "Decide between correction and appeal",
          "body": "Correct the claim when the reprocess shows a data error the practice can fix, such as a wrong modifier, a missing diagnosis, or an incorrect payer order. Appeal when the payer applied a policy the practice believes is wrong and the original claim was accurate. Mixing the two paths creates duplicate claims and confusing denials. Write the decision and the reason on the account before anyone submits. Check the payer’s correction window and the appeal window before choosing. A corrected claim filed after the correction deadline may be rejected, while an appeal filed too early can be closed without review. If both paths are open, choose the one that preserves the practice’s evidence and the patient’s access to care. The decision should be reviewable by a second person when the dollar amount is large."
        },
        {
          "heading": "Build the corrected claim once",
          "body": "Start from the original claim and change only the fields the reprocess identified. Keep the original claim number in the replacement reference so the payer can link the two. Attach the remittance or the payer notice that explains why the correction is needed. A replacement claim that looks like a brand-new claim may pay twice or be denied as a duplicate. Have a second reviewer compare the replacement with the original before submission. Check the patient identifiers, the service dates, the codes, and the payer order. Confirm that the charge total still matches the encounter and that no line was dropped during the edit. One careful review is cheaper than a second correction cycle."
        },
        {
          "heading": "Track the replacement through adjudication",
          "body": "Put the replacement claim on a watch list with a review date tied to the payer’s normal turnaround. Check the clearinghouse status first, then the payer portal, then the remittance. Record each status change with a date so the team can see where time is going. A claim that is accepted but never adjudicated needs a different follow-up than one that was rejected. If the replacement denies, read the reason before resubmitting again. A denial for a missing attachment is different from a denial for timely filing, and the fix is different. Route the denial to the owner named in the correction workflow and set a new review date. Avoid stacking a third claim on top of an unresolved second one."
        },
        {
          "heading": "Close the original claim in the ledger",
          "body": "When the replacement pays, reverse or adjust the original posting so the account shows one correct payment. Match the patient responsibility to the new remittance and update any payment plan or statement already in progress. If the original payment was recouped, confirm the takeback posted before closing the item. The account should not show both the old and the new payment as active. Write a short closeout note with the original claim number, the replacement number, the final paid amount, and the patient balance. Send the note to the billing lead when the case involved a large dollar change or a repeated payer pattern. At month end, review the correction log for payers that reprocess often. That pattern may point to a registration or coding fix upstream."
        },
        {
          "heading": "Coordinate the correction with the patient statement",
          "body": "Hold the patient statement until the replacement claim is adjudicated when the correction could change patient responsibility. Sending a statement based on the old payment can confuse the patient and create a refund later. Note the hold on the account with a review date. Release the statement only when the final responsibility is known. If the patient already paid the old amount, compare it with the new responsibility before issuing a refund or a new balance. Explain the change in one short paragraph on the next statement. Give the patient a number to call if the explanation is unclear. The correction should leave the patient with a story that matches the ledger."
        },
        {
          "heading": "Learn from repeat reprocess codes",
          "body": "Group reprocessed claims by the payer reason and by the code or field that changed. A repeated pattern may point to a registration error, a fee schedule update, or a payer policy change. Read several examples before deciding the cause. One reprocess is an event, while ten of the same reprocess is a process problem. Assign the pattern to the owner of the upstream step and set a review date. If the cause is a payer rule, update the practice’s claim edits or training. If the cause is internal, fix the source field and check a sample of new claims. Track whether the reprocess count falls in the next month."
        }
      ],
      "heroImage": "/images/november-10/run-a-claim-correction-workflow-when-a-payer-reprocesses-a-visit.webp",
      "readTime": "8 min read",
      "checklist": [
        "Flag any claim that receives a second adjudication and record the reason.",
        "Choose correction or appeal from the payer policy and the evidence, not habit.",
        "Keep the original claim reference on every replacement claim you submit.",
        "Watch the replacement through clearinghouse, portal, and remittance stages.",
        "Reverse the original posting so only the final payment remains active."
      ]
    },
    "image": "/images/november-10/run-a-claim-correction-workflow-when-a-payer-reprocesses-a-visit.webp",
    "published": "2026-11-10",
    "category": "blog"
  },
  {
    "slug": "set-a-referral-authorization-log-the-scheduling-team-can-trust",
    "title": "Set a referral authorization log the scheduling team can trust",
    "service": "referral management",
    "description": "A referral authorization log routine for medical practices, covering first-touch capture, status by visit, expiration flags, schedule reconciliation, and denial review.",
    "details": {
      "overview": "A referral authorization is easy to lose between the primary care note, the specialist office, and the payer portal. The scheduling team believes the approval is in place, the visit happens, and the claim denies because the authorization expired or covered a different service. A shared log gives the practice one place to see what was requested, what was approved, and what still needs an answer. The routine below keeps the log accurate enough for scheduling to rely on it.",
      "sections": [
        {
          "heading": "Record the referral at the first touch",
          "body": "Create the log entry when the referral request arrives, not when the appointment is scheduled. Record the patient, the referring provider, the requested service, the payer, and the date the request was sent. Add the authorization number as soon as the payer issues one, even if the approval is still pending for some lines. An entry that starts with the appointment date hides the weeks spent waiting for approval. Use one identifier that every team can search, such as the referral number or the payer reference. Attach the fax confirmation, the portal screenshot, or the electronic referral record to the entry. If the request came by phone, record the call reference and the representative’s name. The log should answer who asked for what and when without a search through email."
        },
        {
          "heading": "Track authorization status by visit",
          "body": "Track status at the level of the visit or the service line, not only at the patient level. A patient may have approval for an office visit but not for an imaging study scheduled the same day. Give each service its own status, its own approved units, and its own expiration date. This prevents a valid approval for one service from being mistaken for approval for everything. Use a small set of statuses that the whole team understands, such as requested, pending, approved, denied, and expired. Do not invent a status that means different things to different people. Require a note whenever the status changes so the history stays readable. A status without a date and a note is only a guess."
        },
        {
          "heading": "Flag expiring approvals before the appointment",
          "body": "Run a daily report of approved authorizations that expire within the next ten business days. Contact the payer or the referring office before the expiration date, not on the day of the visit. If the payer will not extend the approval, tell scheduling before the patient arrives. A late discovery turns a routine visit into a reschedule and a possible no-pay claim. Set the review window based on the payer’s rules and the service type, because some approvals last thirty days and others last the calendar year. Record the expiration date exactly as the payer states it, including any visit or unit limit. Do not assume an approval is valid until the end of the month just because the letter arrived in that month. The log should show the real constraint."
        },
        {
          "heading": "Reconcile the log against scheduled visits",
          "body": "Each morning, compare the next day’s schedule with the authorization log. Flag any visit that has no approved authorization, an expired one, or a service that does not match the approval. Send the exceptions to scheduling and the referring office at the same time. A visit that is not cleared should be confirmed before the patient travels. At the end of the week, compare the log with the visits that actually occurred. Look for approved authorizations that were never used and visits that happened without an entry. Both patterns matter, because unused approvals may point to scheduling errors and missing entries point to intake gaps. Correct the log before the claims are built."
        },
        {
          "heading": "Review denials caused by referral gaps",
          "body": "Pull every denial that names a missing, invalid, or expired authorization. Trace each one back to the log entry and ask where the process failed. The cause might be an intake that never recorded the request, a payer that changed the approval, or a scheduler who booked outside the approved window. Write the cause in plain language and assign one owner. Fix the process that produced the denial instead of only appealing the claim. If the log lacks a required field, add it and train the team on why it matters. If one payer changes approvals without notice, build a weekly check for that payer. Review the denial count again after a month to see whether the fix reduced repeat cases."
        },
        {
          "heading": "Give the log a weekly owner review",
          "body": "Name one person who owns the log each week and checks it for missing fields, stale statuses, and duplicate entries. The owner does not have to do all the work, but they answer for the log’s accuracy. Give the owner thirty minutes a week and a short checklist. A log without an owner soon becomes a shared file no one trusts. Review a small sample of entries against the payer portal and the schedule. Record the defects and the fix, then check whether the same defect returns. Share the weekly result with scheduling and billing together. The review should take less time as the process stabilizes."
        },
        {
          "heading": "Carry referral rules into new-provider onboarding",
          "body": "Add the authorization log to new-provider onboarding before the first schedule goes live. Explain which services require approval, who requests it, and how the practice confirms the approved units. Give the new provider a one-page reference with the escalation contact. A provider who learns the process after the first denial creates avoidable rework. Check the first ten visits for each new provider against the log. Look for missing entries, wrong service matches, and approvals that were never requested. Share the findings privately with the provider and the scheduling lead. Early correction is easier than cleaning up a month of denied claims."
        }
      ],
      "heroImage": "/images/november-10/set-a-referral-authorization-log-the-scheduling-team-can-trust.webp",
      "readTime": "8 min read",
      "checklist": [
        "Open the log entry when the referral arrives, not when the visit is booked.",
        "Track status and approved units per service line, with dates and notes.",
        "Report approvals expiring within ten business days every morning.",
        "Compare tomorrow’s schedule with the log before patients travel.",
        "Trace authorization denials to the log gap and fix the process."
      ]
    },
    "image": "/images/november-10/set-a-referral-authorization-log-the-scheduling-team-can-trust.webp",
    "published": "2026-11-10",
    "category": "blog"
  },
  {
    "slug": "review-a-billing-vendor-invoice-against-actual-claim-volume",
    "title": "Review a billing vendor invoice against actual claim volume",
    "service": "billing vendor oversight",
    "description": "A billing vendor invoice review routine, covering the billable unit, independent volume counts, invoice sampling, quality credits, and a written approval or dispute.",
    "details": {
      "overview": "Outsourced billing invoices often look reasonable until someone compares the billed unit with the work the practice actually received. A vendor may bill per claim, per encounter, or per dollar collected, and each basis produces a different number. Without an independent count, the practice pays whatever the invoice says and discovers the mismatch only at renewal. The routine below gives the invoice a factual check before approval.",
      "sections": [
        {
          "heading": "Define the billable unit in the contract",
          "body": "Read the contract and write down exactly what triggers a charge, such as a clean claim submitted, an encounter coded, or a dollar collected. Confirm which unit the invoice uses and whether it includes rejected claims, corrected claims, or claims that never left the clearinghouse. A per-claim fee on a rejected claim pays the vendor for work that produced no revenue. The definition should be specific enough that two reviewers would count the same way. Check the contract for minimums, tiers, and pass-through costs. A monthly minimum can make a low-volume month look expensive, while a tier change can raise the rate on all volume. List the pass-through items the practice agreed to pay, such as clearinghouse fees or postage. Anything not in the contract should be questioned before it is approved."
        },
        {
          "heading": "Pull the claim volume from your own system",
          "body": "Generate a volume report from the practice management system for the same period as the invoice. Count the unit the contract defines, not the unit that is easiest to export. Reconcile the report to the clearinghouse submission log so claims that were built but never sent are not counted. Save the report with the date and the filters used. Compare the practice count with the vendor count and write down the difference. Ask the vendor to explain the gap with a line-level file rather than a summary. A small difference may come from timing at the month boundary, while a large one may come from duplicate billing or a different unit definition. Do not approve the invoice until the gap is explained."
        },
        {
          "heading": "Sample the invoice lines",
          "body": "Pick ten invoice lines across different service types, payers, and dates. For each one, find the underlying encounter, the claim, and the payment the vendor says it produced. Check that the line was billed once and that the amount matches the contract rate. A sample will not prove the whole invoice, but it will show whether the vendor’s records connect to the practice’s records. Include at least one line that the vendor marked as corrected and one that the practice believes was rejected. These are the lines most likely to be billed incorrectly or counted twice. Ask for the audit trail when a line cannot be matched. If the vendor cannot produce it within the agreed response time, treat the line as unsupported."
        },
        {
          "heading": "Check quality credits and penalties",
          "body": "Compare the vendor’s quality report with the practice’s own denial and clean-claim data. Look for credits the contract requires when a claim is denied for a vendor-caused error. Confirm that the credit was actually applied to the invoice rather than promised for a future month. A quality clause that is never enforced is only a paragraph in the contract. Review the denial reasons the vendor reports and the reasons the payer reports. A vendor may classify a denial as patient responsibility when the real cause was a registration or coding error. Ask for the mapping between the vendor’s categories and the payer’s reason codes. The practice should be able to test the quality score, not just read it."
        },
        {
          "heading": "Approve or dispute in writing",
          "body": "Send a written approval that states the period, the approved amount, the volume basis, and any credit applied. If the invoice is disputed, state the disputed lines, the amount, and the evidence the vendor needs to provide. Set a response date and hold payment on the disputed portion only. A clear written dispute is faster than a series of phone calls. Keep the approval, the volume report, the sample, and the vendor response together for the next renewal. At renewal, use the history to negotiate a clearer unit definition or a better quality term. If the same dispute repeats, the contract or the vendor’s process needs to change. The invoice review is a control, not a monthly argument."
        },
        {
          "heading": "Reconcile the invoice to the bank payment",
          "body": "Match the approved invoice amount to the bank debit or the payment run before closing the month. Confirm the payment date, the amount, and the vendor reference. If the vendor deducts its fee from collections, reconcile the net deposit to the gross collection report. A fee that is never tied to a payment is easy to overpay. Keep the invoice, the approval, and the bank record together for the next review. If a payment was split across months, note the period each part belongs to. At year end, compare total fees with total collections and with the contracted rate. The annual view can reveal a drift that monthly invoices hide."
        },
        {
          "heading": "Use the review to set next year’s terms",
          "body": "Summarize the year’s volume, fees, quality credits, and disputes in one page. Use the summary to negotiate the billable unit, the quality threshold, and the notice period. Ask for a cap on annual rate increases and a clear definition of a clean claim. The best time to fix a vague term is before renewal, not after a dispute. Bring two or three comparable proposals to the renewal conversation, even if the practice intends to stay. A market check keeps the discussion factual. Document the final terms and share them with the billing lead and the finance owner. The invoice review becomes easier when the contract matches the work."
        }
      ],
      "heroImage": "/images/november-10/review-a-billing-vendor-invoice-against-actual-claim-volume.webp",
      "readTime": "8 min read",
      "checklist": [
        "Write down the exact billable unit and what the invoice excludes.",
        "Count the same unit independently from the practice management system.",
        "Sample ten invoice lines and match each to an encounter and a payment.",
        "Apply quality credits in the current invoice rather than accepting a promise.",
        "Approve or dispute in writing with the evidence and a response date."
      ]
    },
    "image": "/images/november-10/review-a-billing-vendor-invoice-against-actual-claim-volume.webp",
    "published": "2026-11-10",
    "category": "blog"
  },
  {
    "slug": "give-a-non-covered-service-notice-a-documented-patient-signature",
    "title": "Give a non-covered service notice a documented patient signature",
    "service": "patient financial responsibility",
    "description": "A non-covered service notice routine for medical practices, covering service identification, plain-language forms, signature timing, claim storage, and a missing-signature audit.",
    "details": {
      "overview": "A non-covered service notice is only useful if the patient understood it before the service and the practice can prove it later. Too often the form is signed at check-in for a service that has not been explained, or it is missing from the chart when the patient disputes the bill. The notice should connect a specific service, a specific reason, and a specific estimate to the patient’s signature. The routine below makes that connection repeatable.",
      "sections": [
        {
          "heading": "Identify services that need a notice",
          "body": "List the services your payers commonly deny as not covered, such as screening tests, certain preventive visits, and procedures with frequency limits. Add services the practice offers outside the plan benefit, including cosmetic or convenience items. Check the payer policy and the patient’s benefit document before the visit when the service is planned. The list should be specific to the practice, not copied from a generic handout. Train the scheduling and check-in teams to recognize the list and route the patient to the right conversation. A patient who is told at the desk that a service may not be covered has time to decide. A patient who learns after the service has already been rendered is more likely to dispute the bill. Recognition at the front end is the control."
        },
        {
          "heading": "Use plain language on the form",
          "body": "Write the notice in short sentences that name the service, the reason it may not be covered, and the estimated amount the patient may owe. Avoid internal codes and payer jargon that the patient cannot interpret. State that the patient may ask for more information or decline the service. A form the patient cannot understand is not informed consent to a bill. Leave space for the patient’s questions and the staff member’s response. Include the date, the patient name, and the specific service rather than a general waiver for all services. If the estimate is a range, explain why the final amount may differ. Give the patient a copy and keep the signed original with the visit record."
        },
        {
          "heading": "Collect the signature before the service",
          "body": "Ask for the signature after the conversation and before the service begins. Confirm that the patient read the form or had it read to them, and answer questions before the signature. Do not present the form as a routine check-in paper mixed with privacy notices. The patient should know which service the signature covers. If the patient declines the service, document the decision and do not render the service. If the patient wants to proceed but refuses to sign, record the refusal and escalate to the practice manager before the visit. A signature collected after the service is weaker evidence and may not support the charge. Timing is part of the record."
        },
        {
          "heading": "Store the notice with the claim",
          "body": "Scan the signed notice into the patient record and attach it to the encounter that includes the service. Use a document type that the billing team can find when the claim is reviewed. Note the date signed and the staff member who witnessed it. A notice stored in a front-desk binder is not available to the biller working the denial. Before submitting a claim for a service on the notice list, confirm that the signed form is attached. If it is missing, resolve the gap before the claim goes out rather than after the payer denies it. For recurring services, check whether a new notice is required for each date or each authorization period. The storage rule should be written so a new employee can follow it."
        },
        {
          "heading": "Audit notices for missing signatures",
          "body": "Each month, sample claims for services on the notice list and check whether a signed form is attached. Record the number sampled, the number missing, and the reason for each gap. Look for patterns by service, by front-desk shift, and by provider. A missing signature is often a workflow gap rather than a single careless act. Fix the cause and re-audit the same service the next month. If the form is too long, shorten it; if the conversation happens too late, move it earlier. Share the audit result with the front-desk lead and the billing lead together. The goal is fewer disputes and a record that supports the patient conversation."
        },
        {
          "heading": "Train new staff on the notice conversation",
          "body": "Role-play the notice conversation during onboarding, including a patient who is upset about the possible cost. Teach staff to explain the service, the reason for possible non-coverage, and the estimate without promising a final amount. Give them a short escalation path for questions they cannot answer. Confidence and plain language matter more than a long script. Observe a few real conversations before signing off on the training. Check that the form names the right service and that the signature is collected before the service. Give feedback on the explanation, not only on the paperwork. A trained front desk prevents more disputes than a longer form."
        },
        {
          "heading": "Review patient disputes for notice quality",
          "body": "When a patient disputes a non-covered charge, read the signed notice before responding. Check whether the form named the service, the reason, and the estimate, and whether the signature was dated before the visit. If the notice was weak, resolve the dispute on the evidence rather than defending the charge. A pattern of weak notices needs a process fix. Record the dispute reason and the outcome in a small log. Share the log with the front-desk lead and the billing lead each month. Look for services or staff shifts with repeated problems. The dispute review is a direct test of whether the notice conversation worked."
        }
      ],
      "heroImage": "/images/november-10/give-a-non-covered-service-notice-a-documented-patient-signature.webp",
      "readTime": "8 min read",
      "checklist": [
        "List the services that need a notice and check the payer benefit first.",
        "Name the service, reason, and estimate in plain language on the form.",
        "Collect the signature after the conversation and before the service.",
        "Attach the signed notice to the encounter the biller will review.",
        "Sample notice claims monthly and re-audit the service after a fix."
      ]
    },
    "image": "/images/november-10/give-a-non-covered-service-notice-a-documented-patient-signature.webp",
    "published": "2026-11-10",
    "category": "blog"
  },
  {
    "slug": "build-a-weekly-denial-root-cause-sample-from-ten-accounts",
    "title": "Build a weekly denial root-cause sample from ten accounts",
    "service": "denial management",
    "description": "A weekly denial root-cause routine for billing teams, covering sample selection, remittance review, cause classification, owner assignment, and reporting the fix.",
    "details": {
      "overview": "A denial report tells the team how many claims were denied, but not why the same denial keeps happening. A small weekly sample of ten accounts can show the real cause and the process that produced it. The sample is not a substitute for the full denial log, but it is small enough to finish and specific enough to change behavior. The routine below keeps the review honest and repeatable.",
      "sections": [
        {
          "heading": "Draw the sample from the denial log",
          "body": "Pull ten denials from the prior week using a rule written in advance, such as every tenth denial or a random draw from the full log. Include denials from different payers and service types so one large payer does not dominate the sample. Do not choose only the denials the team already knows how to fix. A sample of easy cases produces a comfortable report and no improvement. Record the claim number, the payer, the denial date, the reason code, and the dollar amount for each account. Note whether the claim was a first submission or a repeated denial. Keep the list stable once the sample is drawn so the team cannot swap out a difficult case. The sample should be reproducible by another reviewer."
        },
        {
          "heading": "Read the remittance before the note",
          "body": "Open the remittance and read the payer’s reason code and remark code before reading the biller’s note. The note may explain what the team thought happened, but the remittance is the payer’s actual statement. Write the denial reason in your own words and compare it with the note. A mismatch is itself a finding worth recording. Check the claim history for an earlier denial or a corrected claim on the same service. A repeat denial often means the first fix did not address the real cause. Look at the submitted codes, the modifiers, the diagnosis pointers, and the authorization fields. The reviewer should see the claim the payer saw, not a summary."
        },
        {
          "heading": "Classify the cause at the source",
          "body": "Assign each denial to one source category, such as registration, eligibility, coding, authorization, timely filing, or clinical documentation. Use a short category list with written definitions so two reviewers classify the same case the same way. If a case has two causes, choose the one that triggered the denial and note the other. A long free-text cause field is hard to compare across weeks. Name the process step where the cause entered, not only the department that received the denial. A missing authorization may start at scheduling, while a wrong modifier may start at coding. The source step is what the team can change. Record the evidence that supports the classification, such as the registration screen or the operative note."
        },
        {
          "heading": "Assign one owner per cause",
          "body": "Give each cause an owner who can change the process, not just work the account. The owner might be the scheduling lead, the coding manager, or the eligibility supervisor. Write the action the owner will take and the date it will be reviewed. An owner without an action is only a name on a report. Group the ten accounts by cause and look for the largest cluster. If four denials share one cause, fix that cause before working the individual appeals. If the causes are scattered, choose the one with the highest dollar impact or the clearest fix. The team should leave the review with one or two concrete changes, not ten separate tasks."
        },
        {
          "heading": "Report the finding and the fix",
          "body": "Write a one-page summary with the sample size, the cause counts, the dollars, and the actions assigned. Send it to the billing lead and the owners before the next week’s review. Keep the prior week’s summary beside the new one so the team can see whether the fix moved the count. A report that only lists denials does not show progress. At the next sample, check whether the same cause appeared again. If it did, ask whether the action was completed and whether it addressed the source step. If the cause disappeared, note what changed and keep the fix in place. The sample is working when the same denial stops returning, not when the report looks cleaner."
        },
        {
          "heading": "Share the sample with the front line",
          "body": "Present the weekly finding to the team that owns the process, not only to management. Use one or two de-identified examples and explain the exact step that caused the denial. Ask the team what would make the step easier to follow. A finding that stays in a management report rarely changes the work. Keep the tone factual and avoid naming individuals in a group setting. The goal is to fix the process, not to assign blame for a single claim. Recognize the team when a cause drops in the next sample. Visible progress keeps the weekly review going."
        },
        {
          "heading": "Keep a running cause log across weeks",
          "body": "Maintain a simple log with the week, the cause, the count, the owner, and the action. Add the review date and the result of the fix. The log lets the team see whether a cause is falling or returning. It also prevents the same discussion from starting over every month. Review the log at the monthly billing meeting and retire causes that have stayed low for several weeks. Keep the evidence file for any cause that led to a policy change. Over a quarter, the log becomes a practical record of what the practice fixed and what still needs attention."
        }
      ],
      "heroImage": "/images/november-10/build-a-weekly-denial-root-cause-sample-from-ten-accounts.webp",
      "readTime": "8 min read",
      "checklist": [
        "Draw ten denials by a written rule that includes multiple payers.",
        "Read the remittance and claim history before the biller’s note.",
        "Classify each denial to one source category with a defined process step.",
        "Assign one owner per cause and one action with a review date.",
        "Recheck the same cause in the next sample and keep the fix."
      ]
    },
    "image": "/images/november-10/build-a-weekly-denial-root-cause-sample-from-ten-accounts.webp",
    "published": "2026-11-10",
    "category": "blog"
  }
];
