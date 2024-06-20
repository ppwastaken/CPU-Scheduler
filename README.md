****CPU Scheduler Simulation****

This project simulates a CPU scheduler that manages processes using various scheduling algorithms and interacts with different queues and memory configurations.

******Features******

****CPU Scheduling Algorithms:****
First-Come-First-Served (FCFS)
Shortest-Job-First (SJF)
Preemptive Shortest-Job-First (SRTF)
Priority-Based Scheduling
Preemptive Priority-Based Scheduling
Round-Robin Scheduling

****Memory Management:****
Includes simulation of memory allocation and deallocation for processes using frame-based memory.

****Process Management:****
Functions to create, manage, and transition processes between different states (job queue, ready queue, device queue).

****Interactive Command-Line Interface:****
Allows users to interact with the scheduler through commands:

**create-process:**
Create a new process.
**ready-process:**
Move a process to the ready queue.
show-job-queue, show-ready-queue, show-device-queue: Display current queues.
**execute-process:**
Start executing processes based on chosen algorithm.
**reexecute-process: **
Re-execute the CPU scheduler with the same setup.
**change-status:**
Change the status of processes (move between queues).
**show-memory-map: **
Display memory allocation map.
**clear:**
Clear the terminal screen.
**exit:** Exit the program.

****Getting Started****

**Prerequisites**

**Compiler**:
Ensure you have a C++ compiler installed. This project was developed and tested using g++ on macOS.
**Terminal:** Use a terminal or command prompt to compile and run the program.

****Installation****
**Clone the Repository:**
Clone this repository to your local machine.
**Navigate to Project Directory:**
Change into the project directory.
**Compile the Program:**
Compile the main source file scheduler.cpp.

****Run the Program:****
Execute the compiled program.
****Interact with the Program:****
Use the interactive command-line interface to simulate CPU scheduling, memory management, and process handling.
****Commands:****
Enter commands at the > prompt to perform various operations:
**Create and manage processes.**
**Execute CPU scheduling algorithms.**
**Manage memory and queues.**


**Exit: Type exit to quit the program.**




