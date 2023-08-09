# 11 Express.js: Note Taker

## Your Task

Your assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved with an unique id and appears in the left-hand column with the other existing notes and notes are written to file
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

`DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
```


## Achivements

GIVEN a note-taking application
WHEN I open the Note Taker
THEN coded to present with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I coded to present with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN coded new note I have entered is saved with an unique id and appears in the left-hand column with the other existing notes and notes are written to file
WHEN I click on an existing note in the list in the left-hand column
THEN coded to  appear note in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN coded to present with empty fields to enter a new note title and the note’s text in the right-hand column

WHEN delete is pressed coded to delete data using id and json databse is updated and displayed

## Installtion


1.) npm init

2.) npm install

3.) node server.js (To test application)

![image](https://github.com/SanjeethTharmarajah/notestaker/assets/130941252/e76984c2-7ca1-43a4-9102-86557f8b4a64)

4.) To test code in heroku click the following link

https://sleepy-island-15905-da1937ecd04b.herokuapp.com/

## Bonus

Delete is implemented
