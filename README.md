# decoupled-dj
Companion repo for "Decoupled Django" book.

<p>
  <a href="https://twitter.com/gagliardi_vale" target="_blank">
    <img alt="Twitter: gagliardi_vale" src="https://img.shields.io/twitter/follow/gagliardi_vale?style=social" />
  </a>
  <a href="https://github.com/valentinogagliardi/decoupled-dj/actions" target="_blank">
    <img alt="Test suite" src="https://github.com/valentinogagliardi/decoupled-dj/workflows/Test%20suite/badge.svg" />
  </a>
</p>

## Errata

I discovered a few typos in the book which made out to the final version, even if the book has been proofread.

### Chapter 1

At page 14, the last sentence is "In Chapters 11 and 12" instead of "In Chapters 10 and 11".

### Chapter 2

At page 20, it's "of comments, whitespace, while functions, and variable names are mangled." instead "of comments, whitespace, and `while` functions, and variable names are mangled".

At page 22, it's "We will explore the first approach in Chapter 6" instead of "We will explore the first approach in Chapter 5".

At page 27 it's "In Chapter 8, we focus on Next.js" instead of "In Chapter 7, we focus on Next.js".

At page 27 it's "The whole Chapter 9 is devoted to testing" instead of "The whole Chapter 8 is devoted to testing".

### Chapter 3

Chapter 3 does not cover running Django under Uvicorn, which is covered instead in Chapter 5.

### Chapter 4

At page 46, it's "In Chapter 6, we see a practical example of a pseudo-decoupled setup" instead of "In the next chapter, we see a practical example of a pseudo-decoupled setup".

### Chapter 5

At page 58, listing 5-2, `USE_TZ` is `True`, not `Tru`.

At page ? typo, it should be 'python manage.py startapp users' The user is missing an 's'

### Chapter 6

At page 67, it's "`POST` for sending an email to the client (you will work on this in Chapter 12)" instead of "`POST` for sending an email to the client (you will work on this in Chapter 11)".

At page 69, it's "In Chapter 5, we split all the settings for our project," instead of "In Chapter 3, we split all the settings for our project,".

### Chapter 7

At page 93, Listing 7.3, the `DEBUG` environment variable must not be declared in `.env.production.example`.

