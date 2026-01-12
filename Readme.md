yarn playwright test

yarn playwright test --headed

yarn playwright test --ui

yarn playwright show-report

npx playwright codegen

yarn playwright test ./API





yarn playwright test -g "title of test"

yarn playwright test --grep "titl"

--project=chromium



yarn playwright test mytest.js:17





Inside that directory, you can run several commands:



yarn playwright test

    Runs the end-to-end tests. 



yarn playwright test --ui

    Starts the interactive UI mode. 



yarn playwright test --project=chromium

    Runs the tests only on Desktop Chrome. 



yarn playwright test example

    Runs the tests in a specific file. 



yarn playwright test --debug

    Runs the tests in debug mode. 



yarn playwright codegen

    Auto generate tests with Codegen. 



We suggest that you begin by typing:



    yarn playwright test 



And check out the following files:

- ./tests/example.spec.js.txt - Example end-to-end test

- ./tests-examples/demo-todo-app.spec.js.txt - Demo Todo App end-to-end tests

- ./playwright.config.js - Playwright Test configuration



Adding Tags to Test Descriptions

In Playwright, you can add tags to your test descriptions using the @tag syntax. While you can technically use any string as a tag, it's recommended to stick with the @tag convention for consistency. Here's an example of how to add tags to a test description:



test('user can login @smoke @login', async ({ page }) => {

    // Test implementation goes here 

});

Running Tests with Specific Tags

Playwright provides the --grep and --grep-invert command-line flags to run tests based on their tags. The --grep flag allows you to run tests that match a specific tag pattern, while --grep-invert lets you exclude tests that match the pattern. Here are some examples of how to run tests with specific tags:



### Run tests with the @smoke tag

npx playwright test --grep "@smoke"



### Run tests with the @login tag, excluding those with the @smoke tag

npx playwright test --grep "@login" --grep-invert "@smoke"

Combining Tags for Complex Test Selection

In addition to using single tags, you can also combine multiple tags to create more complex test selection criteria. Here are some examples of how to do this:



### Run tests with either the @smoke or @login tag (logical OR)

npx playwright test --grep "@smoke|@login"



### Run tests with both the @smoke and @login tags (logical AND)

npx playwright test --grep "(?=.*@smoke)(?=.*@login)"





npx playwright test --grep @fast



Or if you want the opposite, you can skip the tests with a certain tag:



Bash

PowerShell

Batch

npx playwright test --grep-invert @fast



To run tests containing either tag (logical OR operator):



Bash

PowerShell

Batch

npx playwright test --grep "@fast|@slow"



Or run tests containing both tags (logical AND operator) using regex lookaheads:



npx playwright test --grep "(?=.*@fast)(?=.*@slow)"



You can also filter tests in the configuration file via testConfig.grep and testProject.grep.



await page.pause()

test.describe



### Screenshots

    scr = await page.locator('.submit-button.btn_action').screenshot(); 

    await testInfo.attach('screenshot', { body: scr, contentType: 'image/png' }); 





# Options File

#### The playwright.config.js file configures Playwright test execution. Here's a breakdown of common options:



* testDir: Specifies the directory where test files are located (default is the current working directory).



* fullyParallel: Enables running all tests in all files in parallel.



* forbidOnly: Fails the test run if any tests are marked as .only (useful for CI).



* globalSetup: Points to a file that will be run once before all tests.



* globalTeardown: Points to a file that will be run once after all tests.



* maxFailures: Sets the maximum number of test failures before stopping the run.



* retries: Configures the number of times to retry failing tests.



* reporter: Defines the test reporter(s) to use (e.g., list, line, dot, html).



* timeout: Sets the default timeout for tests in milliseconds.



* workers: Configures the number of parallel workers to use (defaults to the number of CPU cores).



* projects: An array defining different test configurations (e.g., for different browsers or environments). Each project can have its own name, use, and dependencies.



* use: An object containing options that apply to all tests or to specific projects. Common use options include:

    * baseURL: Sets the base URL for the application under test.

    * browserName: Specifies the browser to use (chromium, firefox, webkit).

    * channel: Specifies a browser channel to use (e.g., chrome, chrome-beta, msedge).

    * headless: Runs the browser in headless mode (true by default).

    * viewport: Sets the browser viewport size.

    * ignoreHTTPSErrors: Ignores HTTPS errors.

    * video: Configures video recording (on, off, retain-on-failure).

    * screenshot: Configures screenshot capturing (on, off, only-on-failure).

    * trace: Configures trace capturing (on, off, retain-on-failure).

    * launchOptions: Provides options to configure the browser launch process.

    * permissions: Grants browser permissions (e.g., camera, geolocation).

    * proxy: Configures a proxy server.

    * storageState: Path to the storage state file to share cookies/localStorage between tests.



* testMatch: An array of glob patterns that specify which test files to include.



* testIgnore: An array of glob patterns that specify which test files to exclude. 

 

 
