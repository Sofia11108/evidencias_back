import {TaskStatus} from '../task.entity'

export class createTaskDTO {
    title: string
    description:string
}

export class UpdateTaskDTO {
    title?: string
    description?: string
    status?: TaskStatus
}