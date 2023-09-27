import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './task.entity'
import { UpdateTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tareas: Task[] = [{
        id: '1',
        title: "tarea1",
        description: "sdasd",
        status: TaskStatus.PENDING 
    }]

    getAllTasks() {
        return this.tareas
    }

    createTasks(title:string, description: string) {
        const task = {
            id: new Date().toISOString(),
            title: title,
            description: description,
            status: TaskStatus.PENDING
        }

        this.tareas.push(task)
        return task
    }

    deleteTasks(id:string) {
        this.tareas = this.tareas.filter(task => task.id != id)
        return 'tarea eliminada'
    }

    getTaskById(id:string): Task {
        return this.tareas.find(task => task.id === id)
    }
    
    updateTasks(id:string, updateFields: UpdateTaskDTO): Task {
        const taskFound = this.getTaskById(id)
        const taskUpdated = Object.assign(taskFound, updateFields)
        this.tareas = this.tareas.map(task => task.id === id ? taskUpdated : taskFound)
        return taskUpdated
    }
}

//los servicios contienen todos los metodos que se pueden llamar desde cualquier parte de la aplicación