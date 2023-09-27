export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export class Task {
    id: string
    title: string
    description: string
    status: TaskStatus
}

// const tarea = new Task() 
// tarea.id = "saasd"
// tarea.status = TaskStatus.DONE