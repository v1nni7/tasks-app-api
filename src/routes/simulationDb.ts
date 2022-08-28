let tasksDb = [
  {
    id: "task-1",
    content: "Tarefa 01",
    columnId: "column-1",
    totalCheckbox: 6,
    completedCheckbox: 2,
    workspaceId: 1,
  },
  {
    id: "task-2",
    content: "Tarefa 02",
    columnId: "column-1",
    totalCheckbox: 6,
    completedCheckbox: 2,
    workspaceId: 1,
  },
  {
    id: "task-3",
    content: "Tarefa 03",
    isAction: false,
    columnId: "column-2",
    totalCheckbox: 6,
    completedCheckbox: 2,
    workspaceId: 1,
  },
  {
    id: "task-4",
    content: "Tarefa 04",
    isAction: false,
    columnId: "column-2",
    totalCheckbox: 6,
    completedCheckbox: 2,
    workspaceId: 1,
  },
  {
    id: "task-5",
    content: "Tarefa 05",
    isAction: false,
    columnId: "column-1",
    totalCheckbox: 6,
    completedCheckbox: 2,
    workspaceId: 1,
  },
];

let columnsDb = [
  {
    id: "column-1",
    title: "Em progresso",
    order: 1,
    workspaceId: 1,
  },
  {
    id: "column-2",
    title: "Concluido",
    order: 2,
    workspaceId: 1,
  },
  {
    id: "column-3",
    title: "Finalizado",
    order: 3,
    workspaceId: 1,
  },
  {
    id: "column-4",
    title: "Finalizado",
    order: 3,
    workspaceId: 2,
  },
  {
    id: "column-5",
    title: "Finalizado",
    order: 3,
    workspaceId: 2,
  },
];

let columnsTasks = [
  {
    id: 1,
    taskId: "task-1",
    columnId: "column-1",
  },
  {
    id: 2,
    taskId: "task-2",
    columnId: "column-1",
  },
  {
    id: 3,
    taskId: "task-3",
    columnId: "column-2",
  },
  {
    id: 4,
    taskId: "task-4",
    columnId: "column-2",
  },
  {
    id: 5,
    taskId: "task-5",
    columnId: "column-1",
  },
];

let workspaces = [
  {
    id: 1,
    name: "Primeira área de trabalho API",
    backgroundImage:
      "https://cdn.discordapp.com/attachments/1013165623188148234/1013165790473756745/codebackground.jpg",
  },
  {
    id: 2,
    name: "Segunda área de trabalho API",
    backgroundImage:
      "https://cdn.discordapp.com/attachments/1013165623188148234/1013165790473756745/codebackground.jpg",
  },
];

export { tasksDb, columnsDb, columnsTasks, workspaces };
