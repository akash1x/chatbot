# Chatbot

This is a simple chatbot application.

## Commit History

### commit cfaeeae9839e2e054e04cd2ea0401c75e2c3c21e

**Author:** akash1x <akash1x25@gmail.com>
**Date:** Wed Dec 17 14:54:20 2025 +0530

**docs: created documentation for the initial commit**

This commit introduces the following changes:

- **New Files:**
    - `README.md`: This file was created to provide a basic overview of the application and to start a commit history log.
- **`chatbot.html` Updates:**
    - **`ChatInput` Component:**
        - Now receives `chatMessages` and `setChatMessages` as props to interact with the application's state.
        - Manages the user's input with the `React.useState` hook.
        - The `sendMessage` function adds the user's message to the chat history, clears the input field, and simulates a bot reply with a random UUID.
    - **New `ChatMessages` Component:**
        - This new component is responsible for rendering the list of `chatMessages`.
        - It maps over the `chatMessages` array and renders a `ChatMessage` for each message.
    - **`App` Component:**
        - Now uses `React.useState` to manage the `chatMessages`, initialized with a sample conversation.
        - Passes the `chatMessages` state and the `setChatMessages` function to the `ChatInput` and `ChatMessages` components.
        - Renders the `ChatInput` and `ChatMessages` components to create the full chat interface.

### commit c4feedaba369bbaed83b626dd861089bf314a59f

**Author:** akash1x <akash1x25@gmail.com>
**Date:** Wed Dec 17 14:13:23 2025 +0530

**Created chat message component**

This commit introduces the following changes:

- **New Components:**
    - `ChatInput`: A component for user input, including a text field and a "Send" button.
    - `ChatMessage`: A component to display chat messages, distinguishing between user and bot messages.
- **UI Updates:**
    - The main `App` component now renders the `ChatInput` and `ChatMessage` components.
    - It displays a sample conversation with one message from the user and one from the bot.
- **New Assets:**
    - `chatbot.png`: An icon for the chatbot.
    - `user.png`: An icon for the user.
