import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { TasksService} from './tasks.service'
import { createTaskDTO, UpdateTaskDTO } from './dto/task.dto'

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() newTask:createTaskDTO) {
        console.log(newTask);
       
        return this.tasksService.createTasks(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id:string) {
        return this.tasksService.deleteTasks(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id:string, @Body() updatedFields:UpdateTaskDTO) {
        return this.tasksService.updateTasks(id, updatedFields)
    }
}
 