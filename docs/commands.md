# How to start any application

```
sudo systemctl start mysql

sudo systemctl start clickhouse-server
```

# How to stop any running application and application not in used at that time, (By help of this reduce memory uses)

```
sudo systemctl stop mysql

sudo systemctl stop clickhouse-server
```

# check system hardware size and used
```
df -h
```

# 🧩 What top Does

The top command in Linux is used to monitor real-time system performance — CPU, memory, and running processes.

📊 Understanding Key Sections
1️⃣ System Summary (Top Section)
Field	Meaning
load average	System load in the last 1, 5, and 15 minutes.
Tasks	Number of total, running, sleeping, and zombie processes.
%Cpu(s)	CPU usage breakdown: user, system, idle, etc.
Mem / Swap	Memory usage (used, free, cached, etc.).
2️⃣ Process List (Bottom Section)
Column	Meaning
PID	Process ID
USER	Owner of the process
PR / NI	Priority / Nice value (affects scheduling)
VIRT	Virtual memory used
RES	Resident memory (real physical RAM used)
SHR	Shared memory
S	State (R=Running, S=Sleeping, Z=Zombie)
%CPU	CPU usage percent
%MEM	Memory usage percent
TIME+	Total CPU time used
COMMAND	Process name or command
🧠 Useful Shortcuts Inside top
Key	Function
q	Quit top
P	Sort by CPU usage (highest first)
M	Sort by memory usage (highest first)
k	Kill a process (then enter PID)
1	Show CPU usage per core
Shift + R	Reverse sort order
h	Help menu
⚙️ Example: Find Heavy Memory Users

Run:

top -o %MEM


This sorts processes by memory usage automatically.

Or just press M inside top.

✅ In short:

top = live system monitor for:

CPU usage

Memory usage

Running processes

Process control (kill, sort, etc.)