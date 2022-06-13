# CSS

Time to prettify your websites!

## Steps

1. Fork and clone [this repository](https://github.com/JoinCODED/TASK-Masterclass-M10-CSS).
2. Install the dependencies using `npm i`.
3. Start the BE & FE servers using `npm start` (`concurrently` is set up, so you do not have to worry about anything).

## Selectors

Use this [link](https://www.w3schools.com/cssref/css_selectors.asp) to your advantage.

1. Install `css resets` using `npm i the-new-css-reset`.
2. Go through the docs [here](https://www.npmjs.com/package/the-new-css-reset#npm-and-how-to-use) to set up the resets.
3. See how the navbar on top of your website looks ugly, we want it to look like an actual navbar.
4. Add a SASS stylesheet with some CSS so that your navbar is on one line (horizontally).
5. If the CSS resets have not removed the `list-style`, then make sure to remove them because we do not want them.
6. Make sure your navbar is spaced out evenly and add pipes between each nav item (HINT: use either the `::before` or `::after` selectors).
   - **Note** you may not use HTML to add the pipes, use only CSS to add them

## Grid

Use this [link](https://css-tricks.com/snippets/css/complete-guide-grid/) to your advantage.

1. Add a SASS stylesheet for `Post` and `PostList`.
2. Add a page container so that your page contents are in the center and limited by some large width:

   ```scss
   .page--wrapper {
     height: 100%;
     width: 100%;

     display: grid;
     place-items: center;
   }

   .container {
     width: 100%;
     max-width: 75rem;
   }
   ```

3. Add another grid for our `section`, so that posts will be displayed in a grid style.
4. Add some CSS to make your `Post` component look like a card.

### Grid Bonus

1. Color each even and odd card differently (using only CSS, look at the `even`/`odd` selectors).
2. Add CSS that will prevent the text from overflowing in your cards.
   - HINT: you will need to use several properties to achieve this, and the key aspect to getting this working is to have a defined width for your card.
