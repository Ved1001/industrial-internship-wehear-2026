package com.prac.practice.service;

import com.prac.practice.entity.Students;
import com.prac.practice.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public Students createStudent(Students student) {
        return repository.save(student);
    }

    public List<Students> getAllStudents() {
        return repository.findAll();
    }

    public Students getStudentById(String id){
        return repository.findById(id).orElse(null);
    }

    public void deleteStudentById(String id){
        repository.deleteById(id);
    }

    public void deleteAllStudent(){
        repository.deleteAll();
    }
}