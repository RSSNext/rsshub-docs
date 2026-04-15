---
sidebar_position: 2
---

# Script Standard

## Code Style

### General Guidelines

-   **Be consistent!**
-   Avoid using deprecated features.
-   Avoid modifying `yarn.lock` and `package.json`, unless you add a new dependency.
-   Combine repetitive code into functions.
-   Prefer higher ECMAScript Standard features over lower ones.
-   Sort the entries alphabetically (uppercase first) to make it easier to find an entry.
-   Use HTTPS instead of HTTP whenever possible.
-   Use WebP format instead of JPG whenever possible since it offers better compression.

### Formatting

#### Indentation

-   Use 4 spaces for indentation for consistent and easy-to-read code.

#### Semicolons

-   Add a semicolon at the end of each statement for improved readability and consistency.

#### String

-   Use single quotes instead of double quotes whenever possible for consistency and readability.
-   Use [template literals](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals) over complex string concatenation.
-   Use [template literals](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals) for GraphQL queries as they make the code more concise and easy to read.

#### Whitespace

-   Add an empty line at the end of each file.
-   Avoid trailing whitespace for a clean and readable codebase.

### Language Features

#### Casting

-   Avoid re-casting the same type.

#### Functions

-   Prefer [arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) over the `function` keyword.

#### Loops

-   Use `for-of` instead of `for` for arrays ([javascript:S4138](https://rules.sonarsource.com/javascript/RSPEC-4138)).

#### Variables

-   Use `const` and `let` instead of `var`.
-   Declare one variable per declaration.

### Naming

-   Use `lowerCamelCase` for variables and functions to adhere to standard naming conventions.
-   Use `kebab-case` for files and folders.
-   Use `CONSTANT_CASE` for constants.

### Anti-Patterns

-   Select every `a` element with `href` attribute without any parent element or class name.

:::details

```javascript
const seen = new Set();
$('a[href="some/url"]').each((_, a) => {
    // ...
    if (seen.has(a.href)) {
        return;
    }
    seen.add(a.href);
    // ...
});
```
:::

-   Brute-force matching of selectors.

:::details

```javascript
const randomGuessingSelectors = ['spray-and-pray', 'a-bunch-of-selectors', 'or-classes', 'that-most-does-not-exist', 'except-one-that-actually-exist'];
for (const selector of randomGuessingSelectors) {
    const element = $(selector);
    if (element.length > 0) {
        // ...
        break;
    }
}
```
:::

-   Enumerate combinations of selectors of the same element.

:::details

```html
<ul><!-- Suppose we want to extract the text of the "Three" element -->
    <li>One</li>
    <li>Two</li>
    <li class="blue sel">Three</li>
    <li class="red">Four</li>
</ul>
```

```javascript
const text = $('ul li.blue.sel, li.blue.sel, .blue.sel, li.blue, .blue, li.sel, .sel').text();
// or
const text = $('ul li.blue.sel').text() || $('li.blue.sel').text() || $('.blue.sel').text() || $('li.blue').text() || $('.blue').text() || $('li.sel').text() || $('.sel').text();
```
:::

-   Use `.first()` or `.last()` to select an element which appears only once in the page.

:::details

```javascript
const element = $('.some-unique-element-that-appears-only-once').first();
// or
const element = $('.some-unique-element-that-appears-only-once').last();
```
:::

## Forbidden behavior

### False attribution

Do not list another developer's GitHub ID in the `maintainers` field of a route unless they have explicitly agreed. Only list GitHub IDs that belong to you or to contributors who have given you permission.

```ts
export const route: Route = {
    // ...
    name: 'Some route',
    maintainers: ['some-other-developer-who-never-agreed'],
    handler,
};
```

Each offense results in a temporary ban (1 month) from submitting pull requests. Bans are enforced via [vouch](https://github.com/mitchellh/vouch). New PRs from a banned author will be closed automatically. A maintainer can lift the ban once the circumstances have been reviewed.

## v2 Route Standard

:::danger

The v2 Route Standard is deprecated. All new routes should follow the [Create Route](/joinus/new-rss/start-code).

:::

::::details

When creating a new route in RSSHub, you need to organize your files in a specific way. Your namespace folder should be stored in the `lib/routes` directory and should include three mandatory files:

-   `router.ts` Registers the routes
-   `maintainer.ts` Provides information about the route maintainer
-   `radar.ts` Provide a [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) rule for each route

Your namespace folder structure should look like this:

```
├───lib/routes
│   ├───furstar
│       ├─── router.ts
│       ├─── maintainer.ts
│       ├─── radar.ts
│       ├─── someOtherJs.ts
│   └───test
│   └───someOtherNamespaces
...
```

**All eligible routes under the `lib/routes` path will be automatically loaded without the need for updating the `lib/router.ts`.**

### Namespace

RSSHub appends the name of all route namespace folders in front of the actual route. Route maintainers should think of the namespace as the root.

#### Naming Standard

-   Use the second-level domain (SLD) as your namespace. You can find more information about URL structure [here](/joinus/new-radar#top-level-object-key).
-   Do not create variations of the same namespace. For more information, see [this page](/joinus/new-rss/before-start#create-a-namespace)

### Registering a Route

To register a route, the `router.ts` file should export a method that provides a  Hoho route handler.

### Maintainer List

The `maintainer.ts` file should export an object that provides maintainer information related to the route, including:

-   Key: Corresponding route path
-   Value: Array of strings, including all maintainers' GitHub ID.

To generate a list of maintainers, use the following command: `pnpm run build`, which will create the list under `assets/build/`.

:::danger

The path should be the same as the `path` in the corresponding documentation before the namespace appended in front of it.

:::

### Radar Rules

All routes are required to include the `radar.ts` file, which includes the corresponding domain name. The minimum requirement for a successful match is for the rule to show up on the corresponding site which requires filling in the `title` and `docs` fields.

To generate a complete `radar-rules.ts` file, use the following command: `yarn build`, which will create the file under `assets/build/`.

:::tip

Remember to remove all build artifacts in `assets/build/` before committing.

:::

::::

## v1 Route Standard

:::danger

The v1 Route Standard is deprecated. All new routes should follow the [Create Route](/joinus/new-rss/start-code).

:::
