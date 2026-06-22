package com.prac.practice.repository;

import com.prac.practice.entity.Students;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Students,String> {

}
