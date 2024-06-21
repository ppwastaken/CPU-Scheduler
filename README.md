# CPU Scheduler Simulation

This project simulates a CPU scheduler that manages processes using various scheduling algorithms and interacts with different queues and memory configurations. It provides a comprehensive simulation environment for CPU scheduling, process management, and memory management.

## Features

### CPU Scheduling Algorithms

The project supports multiple CPU scheduling algorithms:

- **First-Come-First-Served (FCFS)**: Processes are scheduled in the order they arrive in the ready queue.
- **Shortest-Job-First (SJF)**: Processes with the shortest burst time are scheduled first.
- **Preemptive Shortest-Job-First (SRTF)**: The process with the shortest remaining time is scheduled next.
- **Priority-Based Scheduling**: Processes are scheduled based on priority.
- **Preemptive Priority-Based Scheduling**: Higher priority processes preempt lower priority ones.
- **Round-Robin Scheduling**: Each process is assigned a fixed time slice in a cyclic order.

### Memory Management

Includes simulation of memory allocation and deallocation for processes using frame-based memory:

- **Frame-based memory management**: Allocate memory in fixed-size blocks (frames) to processes.
- **Memory map visualization**: Display the current allocation of memory to processes.

### Process Management

Functions to create, manage, and transition processes between different states:

- **Job Queue**: Holds all processes that are not yet admitted to the system.
- **Ready Queue**: Holds processes that are ready to be executed.
- **Device Queue**: Holds processes that are waiting for I/O operations.

### Interactive Command-Line Interface

An interactive CLI allows users to interact with the scheduler through commands:

- **create-process**: Create a new process.
- **ready-process**: Move a process to the ready queue.
- **show-job-queue**, **show-ready-queue**, **show-device-queue**: Display the current state of the queues.
- **execute-process**: Start executing processes based on the chosen scheduling algorithm.
- **reexecute-process**: Re-execute the CPU scheduler with the same setup.
- **change-status**: Change the status of processes (move between queues).
- **show-memory-map**: Display the current memory allocation map.
- **clear**: Clear the terminal screen.
- **exit**: Exit the program.

### Graphical User Interface (GUI)

In addition to the CLI, this project includes a GUI for more intuitive interaction. Users can:

- Run the same commands through the GUI.
- Visualize process scheduling and memory management.
- Easily navigate through different views of the system state (job queue, ready queue, device queue, memory map).

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- **C++ Compiler**: Ensure you have a C++ compiler installed. This project was developed and tested using g++ on macOS.
- **Terminal**: Use a terminal or command prompt to compile and run the program.
- **GUI Library**: Ensure you have the necessary libraries installed for the GUI (e.g., Qt, GTK).

### Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository:**
    ```sh
    git clone https://github.com/yourusername/cpu-scheduler-simulation.git
    ```

2. **Navigate to Project Directory:**
    ```sh
    cd cpu-scheduler-simulation
    ```

3. **Compile the Program:**
    ```sh
    make
    ```

### Running the Program

1. **Execute the compiled program:**
    ```sh
    ./scheduler
    ```

2. **Interact with the Program:**
    Use the interactive command-line interface or the GUI to simulate CPU scheduling, memory management, and process handling.

### Commands Overview

- **create-process**: 
    ```sh
    create-process <process_id> <burst_time> <priority> <memory_required>
    ```
    Creates a new process with the specified ID, burst time, priority, and memory requirements.

- **ready-process**: 
    ```sh
    ready-process <process_id>
    ```
    Moves the specified process to the ready queue.

- **show-job-queue**:
    ```sh
    show-job-queue
    ```
    Displays the current state of the job queue.

- **show-ready-queue**:
    ```sh
    show-ready-queue
    ```
    Displays the current state of the ready queue.

- **show-device-queue**:
    ```sh
    show-device-queue
    ```
    Displays the current state of the device queue.

- **execute-process**: 
    ```sh
    execute-process <algorithm>
    ```
    Starts executing processes based on the specified scheduling algorithm (`fcfs`, `sjf`, `srtf`, `priority`, `preemptive-priority`, `round-robin`).

- **reexecute-process**:
    ```sh
    reexecute-process
    ```
    Re-executes the CPU scheduler with the same setup.

- **change-status**:
    ```sh
    change-status <process_id> <new_status>
    ```
    Changes the status of the specified process.

- **show-memory-map**:
    ```sh
    show-memory-map
    ```
    Displays the current memory allocation map.

- **clear**:
    ```sh
    clear
    ```
    Clears the terminal screen.

- **exit**:
    ```sh
    exit
    ```
    Exits the program.
