# To-Do List Application

# Task List - global variable to store tasks
tasks = []

# Function to display the menu
def display_menu():
    print("\n--- To-Do List Menu ---")
    print("1. Add Task")
    print("2. Complete Task")
    print("3. Remove Task")
    print("4. View All Tasks")
    print("5. Exit")

# Function to add a task
def add_task():
    task_title = input("Enter the task title: ")
    task = {"title": task_title, "status": "Pending"}
    tasks.append(task)
    print(f"Task '{task_title}' added successfully.")

# Function to complete a task
def complete_task():
    view_tasks()
    try:
        task_number = int(input("Enter task number to complete: ")) - 1
        if tasks[task_number]['status'] == 'Completed':
            print(f"Task '{tasks[task_number]['title']}' is already completed.")
        else:
            tasks[task_number]['status'] = "Completed"
            print(f"Task '{tasks[task_number]['title']}' marked as completed.")
    except (IndexError, ValueError):
        print("Invalid task number. Please try again.")

# Function to remove a task
def remove_task():
    view_tasks()
    try:
        task_number = int(input("Enter task number to remove: ")) - 1
        removed_task = tasks.pop(task_number)
        print(f"Task '{removed_task['title']}' removed successfully.")
    except (IndexError, ValueError):
        print("Invalid task number. Please try again.")

# Function to view all tasks
def view_tasks():
    if not tasks:
        print("No tasks in the list.")
    else:
        print("\n--- To-Do List ---")
        for i, task in enumerate(tasks, start=1):
            status = "✓" if task['status'] == "Completed" else "✗"
            print(f"{i}. {task['title']} [{status}]")

# Main function to run the to-do list application
def main():
    while True:
        display_menu()
        choice = input("Choose an option (1-5): ")
        if choice == '1':
            add_task()
        elif choice == '2':
            complete_task()
        elif choice == '3':
            remove_task()
        elif choice == '4':
            view_tasks()
        elif choice == '5':
            print("Exiting To-Do List. Goodbye!")
            break
        else:
            print("Invalid choice. Please choose a valid option.")

# Run the To-Do List Application
if __name__ == "__main__":
    main()