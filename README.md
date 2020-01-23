# solo-koala-54

## Chingu Voyage Pre-Work Solo Project (Tier 2): *Favorite Fonts* ##
An SPA that displays fonts from Google Fonts API sorted by popularity. Users can define a custom text, font size, and filter fonts by search term.

----
## Devolpment Info
### Dependancies
- [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [aphrodite](https://github.com/Khan/aphrodite)
- [Google Fonts API](https://developers.google.com/fonts/)
- [axios](https://www.npmjs.com/package/axios)
### Specification
- header
    - logo
    - site menu/page links
- catalog
    - toolbar
        - search Google Fonts
        - customise sample text
        - alter font size
        - toggle grid/bar view
        - toggle light/dark theme
        - reset all controls
    - cards
        - grid type
        - bar type
        - add to collection button
        - remove from collection button
- featured
- articles
- about
    
### Structure
#### Data flow
![Data flow Diagram](./assets/dataflow.png);

---- 
## TODO
- [x] rename Nav component to Toolbar
- [x] add some padding around collectionOpenButton
- [] add margin between cards and toolbar on bar view
- [] make search input not overlap display controls on small screen size 
- [] make decorative 'tiles' using fonts in featured page for featured page and apply grid styling
- [] impliment micro-animations on: 
    - [] cards 
        - on render 
           - grid view - bobble
           - bar view - grow from center
        - adding to collection - grow and bobble back
        - removing from collection - confetti 
    - [] search icon - grow and in circle flick through letters
    - [] logo on first page load - Y rotate circled letters sequentially
    - [] light/dark theme icon - to plain circle and back to moon
    - [] font size slider - grow/shrink circle
    - [] reset icon - spin 
----
