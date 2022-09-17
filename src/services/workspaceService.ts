import workspaceRepository from "../repositories/workspaceRepository";
import { columnsDb, tasksDb } from "../routes/simulationDb";

const getSelectedWorkspace = (id: number) => {
  let tasks = {};
  let columns = {};
  let columnOrder = [];

  const selectedWorkspaceColumns: any = columnsDb.filter(
    (columnDb) => columnDb.workspaceId === id
  );

  console.log(selectedWorkspaceColumns);

  if (!selectedWorkspaceColumns) {
    return;
  }

  console.log("Recebido");

  tasksDb.map((tasksDb) => {
    if (tasksDb.workspaceId === id) {
      tasks = {
        ...tasks,
        [tasksDb.id]: {
          ...tasksDb,
        },
      };
    }
  });

  columnsDb.map((columnDb) => {
    let taskIds = [];

    tasksDb.filter((task) => {
      if (task.columnId === columnDb.id) {
        taskIds.push(task.id);
      }
    });

    if (columnDb.workspaceId === id) {
      columns = {
        ...columns,
        [columnDb.id]: {
          ...columnDb,
          taskIds,
        },
      };
    }
  });

  const sortColumns = selectedWorkspaceColumns.sort(
    (orderNumberA: any, orderNumberB: any) => {
      return orderNumberA.order < orderNumberB.order
        ? -1
        : orderNumberA.order > orderNumberB.order
        ? 1
        : 0;
    }
  );

  sortColumns.map((order) => {
    columnOrder.push(order.id);
  });

  const workspaceData = {
    tasks,
    columns,
    columnOrder,
  };

  return workspaceData;
};

const getCreatedWorkspaces = async (id: number) => {
  const createdWorkspaces = await workspaceRepository.getUserWorkspaces(id);

  return createdWorkspaces;
};

const createWorkspace = async (data: any) => {
  const createdWorkspace = await workspaceRepository.create(data);

  return createdWorkspace;
};

export default { getSelectedWorkspace, getCreatedWorkspaces, createWorkspace };

/*   
  const selectedWorkspaceColumns: any = columnsDb.filter(
    (columnDb) => columnDb.workspaceId === id
  );

  const selectedWorkspaceTasks = tasksDb.filter(
    (taskDb) => taskDb.workspaceId === id
  );

  let data = {
    tasks: {},
    columns: {},
    columnOrder: [],
  };

  selectedWorkspaceColumns.map((column) => {
    let taskIds = [];

    tasksDb.filter((task) => {
      if (task.columnId === column.id) {
        taskIds.push(task.id);
      }
    });

    data.columns = {
      ...data.columns,
      [column.id]: {
        ...column,
        taskIds,
      },
    };
  });

  const columnOrderArrObj = selectedWorkspaceColumns.sort((a, b) => {
    return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
  });

  columnOrderArrObj.map((order) => {
    data.columnOrder = [...data.columnOrder, order.id];
  });

  selectedWorkspaceTasks.map((task) => {
    data.tasks = {
      ...data.tasks,
      [task.id]: {
        ...task,
      },
    };
  });
 */
