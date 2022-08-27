import { Router, Request, Response } from "express";
import { workspaces, tasksDb, columnsDb, columnsTasks } from "./simulationDb";

const workspaceRouter = Router();

workspaceRouter.get("/workspaces", (req: Request, res: Response) => {
  res.status(200).send(workspaces.sort().reverse());
});

workspaceRouter.get("/workspace/:id", async (req: Request, res: Response) => {
  const id: any = parseInt(req.params.id);
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

  res.status(200).send(data);
});

export default workspaceRouter;
