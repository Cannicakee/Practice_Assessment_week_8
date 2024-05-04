# CompSci 1 Practice Assessment - OOP and TDD

Welcome to the OOP and TDD practice assessment!

In the coding portion of this practice assessment, you will implement an online
store based solely on test specs and your OOP/TDD skills.

Read the specs carefully to understand the requirements and file structure of
the project. Everything you need to know is there.

Your objective is to write whatever code is necessary to pass all test specs.
Each spec is worth 1 point.

__Total Possible Points on Coding Section:__ 17 points

You will have **2 hrs and 55 minutes** to complete the assessment (including the
multiple choice portion).

## Resources

During the actual assessment, you will be allowed to use the following
resources:

* [MDN]
* A whiteboard or paper to work out problems/code, but they must be within
  camera range
* VScode or a console for testing and experimentation during any part of the
  test, including multiple-choice questions
* Node
* Postman (when useful)

You will **NOT** be allowed to refer to any other resources, including--but not
limited to--other websites (e.g., AA Open, StackOverflow), communication apps
(e.g., Slack, Discord), search engines, notes, or any of your previously written
code.

## Setup

1. Clone this starter repo and open it in VS Code.
2. Run `npm install` in the root directory.
3. Run `npm test` to see all the specs you need to pass.

A few notes:

* This assessment focuses primarily on OOP and TDD. However, you should be
  prepared to apply any of the skills you learned in Module 1, specifically
  working with objects and advanced array methods. Make sure you are comfortable
  with all of the skills highlighted in the spec descriptions.

* The test specs for this practice assessment are organized by _skill_, not by
  class. As a result, you will need to move around across different files and
  classes as you work through the specs. You may find that your code for a
  specific method passes a basic spec early on, but you may need to add more
  code to that method later in the practice assessment to pass additional specs.

* The assertions within the test specs highlight the specific methods and
  attribute names that will be used in the tests. However, you are not limited
  to _only_ using those attributes and methods. Feel free to create additional
  helper methods and/or attributes to help you pass the specs and keep your code
  DRY.

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `npm test` in the root directory to re-run all of the tests.
  
2. Fix any syntax errors that cause the tests to crash. **If a test crashes or
   the tests fail to complete their run, you will receive a 0 for the coding
   portion of this assessment.** You can fail specs, but all the tests have to
   be able to finish running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your programs to crash.

3. Add, commit, and push your changed files:

   ```sh
   git add .
   git commit -m "Finish the assessment (or some such descriptive message)"
   git push
   ```

   **Note:** The first time you run `git push`, git will tell you to run a more
   complete version of the command:

   ```sh
   git push --set-upstream origin <your branch>
   ```

You can run tests, `add` files, and `commit` files as often as you wish, but
only your first **two pushes** will be graded. (If for some reason you need more
than two pushes, you must plead your case to an Instructor.)

[MDN]: https://developer.mozilla.org/en-US/
