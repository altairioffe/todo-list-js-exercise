const log = console.log

const newTask = function(title, description) {

  const task = {
    title,
    description,
    'complete': false,
    completeTask: function(task) {
      return this.complete = true;
    },
    logTaskState: function(task) {
      log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
//log(task1.logTaskState())
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
task1.completeTask()
task1.logTaskState()
// for now, let's just make sure we see our tasks
//log(tasks);

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
