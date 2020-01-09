# Components:
- Page Navigation Bar
- Todos section
  - Add-task
    - Add-task text field
    - Color Selector
    - Add-task button
  - Search/filter bar
  - Clear all todos button
  - Todo-list
    - To-do item
      - Item label and color code
      - Delete Button

# Data management:
We need to store an array of todo objects. Each todo object will have an id, a label, a color category/tag, and (later) details. This data needs to be accessible by the todo-list, search-bar, clear button, and add task bar. Thus the array should be stored in the parent todo-page section.

# Features:
- Type todo, select a color tag, and add the todo
- Filter to-do in a search bar
- Clear all todos
- Complete a to-do (and save it to a copmleted todos list)
- Delete a to-do (and don't save it) via its id
- To-do names will have a character limit

# State variables:
- List of todos: within Todos section
- Filter/search bar text: wtihin todos section
- Add todo input text: within Add-task
- Color dropdown selection: within Add-task

# Today page:
- Today page
  - weather


