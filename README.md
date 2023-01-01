MINIWARE INFO

# Usage

## npm
```
npx miniware
```

## GitHub Package Registry
Assuming you have the GitHub registry set up, you can use via npx:
```
npx @miniware/card
```

## Forking

If you want to fork this project and make your own card, you can do so by editing the `resume.json` file. This follows the [JSON Resume Schema](https://jsonresume.org/schema/), though not all fields are currently supported — you can add them by modifying the `build.js`.

You can then run `npm run build` to generate a new `bin/output` file. You can then commit and push your changes to GitHub and use `npx <your-github-username>/card` to see your new card.
