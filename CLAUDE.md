# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**⚠️ IMPORTANT: This is a QA Training Application ⚠️**

This is a React-based pizza ordering demo application that serves as a **testing practice environment for QA engineers**. The application contains **intentional defects** designed for exploratory testing training.

**DO NOT fix bugs, defects, or unusual behaviors unless explicitly instructed to do so.** The "bugs" are pedagogical features used to train QA interns in exploratory testing and defect identification.

### Purpose

- QA interns visit this application to practice exploratory testing
- Contains intentionally placed defects for discovery
- Does not actually order pizza or perform real transactions
- Serves as a learning tool for identifying and documenting software issues

## Key Commands

```bash
# Start development server (opens http://localhost:3000)
npm start

# Run tests in watch mode
npm test

# Build for production
npm run build
```

## Architecture

### Component Hierarchy

```
PizzaApp (root)
├── PizzaForm
│   ├── PizzaSizeFormSection
│   ├── CheeseFormSection
│   ├── CrustFormSection
│   ├── SauceAmountFormSection
│   └── ToppingsFormSection
│       └── Topping (multiple)
├── AddToCartButton
├── CartItem (multiple)
│   └── Counter
└── Order Review (rendered inline)
```

### State Management

**PizzaApp** manages all application state:
- `cartItems`: Array of pizza items currently displayed in the cart
- `cartCopy`: Persistent copy of all added items (used for order review)
- `totalUniqueItems`: Counter for generating unique cart IDs

State is managed via class component methods without external state management libraries.

### Form Handling Pattern

The application uses **direct DOM manipulation** rather than controlled React components:

- Form inputs are uncontrolled (no value/onChange props)
- `handleAddPizzaToCart` directly queries `document.forms[0]` to extract checked inputs
- Pizza name is derived from the first checked input's `formname` attribute
- Form is reset by manually setting `checked=false` on all inputs after submission

Each form input has a `formname` attribute containing the user-friendly label (e.g., "Medium", "Extra Cheese", "Pepperoni").

### Cart Item Structure

```javascript
{
    pizzaName: string,      // First selected option (e.g., "Medium")
    pizzaSummary: string,   // Comma-separated list of all options
    count: number,          // Quantity
    cartId: number          // Unique identifier
}
```

### Intentional Defects (DO NOT FIX)

**⚠️ THE FOLLOWING BUGS ARE INTENTIONAL FOR QA TRAINING ⚠️**

These defects must remain in the codebase:

1. **Size and Sauce are mutually exclusive** - `sauceAmount.jsx:10` has `name="size"` instead of `name="sauce"`, causing both to share the same radio button group
2. **No default values selected** - Form starts with nothing selected, can submit empty pizzas
3. **Anchovies filtered from summary** - `pizzaApp.jsx:52` explicitly excludes Anchovies from `pizzaSummary` even when selected
4. **Deleting a pizza still shows in order summary** - `handleDelete` only updates `cartItems`, not `cartCopy` (which is used by `generateReview`)
5. **Incrementing/decrementing count doesn't update order summary** - `handleIncrement` and `handleDecrement` only update `cartItems`, not `cartCopy`
6. **Number of pizzas can go negative** - `handleDecrement` has no lower bound check
7. **Pizza name can be empty** - No validation prevents adding pizza with no selections
8. **Contact info not validated** - Email field accepts any input including empty strings
9. **Text overflows summary box** - Adding many pizzas causes text to render outside the order review container
10. **Edge browser pizza naming bug** - `pizzaApp.jsx:54` has browser-specific logic that causes different naming behavior in Edge
11. **Mobile experience is terrible** - No responsive design considerations

### Non-Intentional Defects (Can Be Fixed)

These are actual bugs that can be corrected:

1. **Filename typo**: `coutner.jsx` should be `counter.jsx`
2. **Missing space in className**: `addToCart.jsx:7` - `onClick={this.props.onAdd}className=` needs space
3. **Missing space in attribute**: `crustChoice.jsx:10` - `formname={...}id=` needs space
4. **Inconsistent attribute casing**: `topping.jsx:12` uses `formName` (camelCase) while other components use `formname` (lowercase) - causes toppings to not work properly since `pizzaApp.jsx:52` looks for `formname`
5. **Wrong component name**: `cheeseSelectionFormSection.jsx:4` exports `CrustFormSection` instead of `CheeseFormSection` (may be intentional - requires verification)
6. **Unused code**: Various unused state variables and methods in `topping.jsx` and `counter.jsx`

### Other Notable Patterns

- **Direct DOM manipulation**: Uses `document.querySelector` and `document.forms[0]` instead of React patterns
- **Uncontrolled form inputs**: Form state not managed by React
- **Collapsible details**: Cart items use `react-collapsible` to show/hide pizza details

## Working with This Repository

When asked to modify code:
1. **Always confirm** whether changes should preserve or fix defects
2. **Document** what you observe without assuming it's wrong
3. **Ask first** before "improving" or "fixing" unusual patterns
4. If adding features, maintain the existing code style and patterns

## Dependencies

- **React 17** with class components (not hooks)
- **Bootstrap 4.6** for styling
- **react-collapsible** for cart item expansion
- **Create React App 4.0.3** build toolchain
