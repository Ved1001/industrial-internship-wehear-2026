package com.prac.practice.controller;

import com.prac.practice.entity.Students;
import com.prac.practice.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @PostMapping
    public Students createStudent(@RequestBody Students students){
        return service.createStudent(students);
    }

    @GetMapping("/all")
    public List<Students> getAllStudents(){
        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public Students getById(@PathVariable String id){
        return service.getStudentById(id);
    }

    @DeleteMapping("/{id}")
    public void DeleteById(@PathVariable String id){
         service.deleteStudentById(id);
    }

    @DeleteMapping("/all")
    public void DeleteAll(){
        service.deleteAllStudent();
    }
}
