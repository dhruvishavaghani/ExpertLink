package com.example.Backend.Controller;

import com.example.Backend.Model.Service;
import com.example.Backend.Model.Users;
import com.example.Backend.Request.ServiceRequest;
import com.example.Backend.Services.ServiceOfServices;
import com.example.Backend.Services.UserService;
import io.jsonwebtoken.impl.lang.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashSet;
import java.util.Set;

@Controller
@CrossOrigin("*")
@RequestMapping("/api/services")
public class ServiceController {

    @Autowired
    ServiceOfServices serviceOfServices;

    @Autowired
    UserService userService;

    @PostMapping("/service")
    public ResponseEntity<?>addService(@RequestBody ServiceRequest serviceRequest){
        try {
            Service service = new Service();
            service.setId(serviceRequest.getId());
            service.setType(serviceRequest.getType());
            service.setTitle(serviceRequest.getTitle());
            service.setAmount(serviceRequest.getAmount());
            service.setDuration(serviceRequest.getDuration());
            service.setDescription(serviceRequest.getDescription());

            Users user = userService.getUserById(serviceRequest.getUserId());
            Set<Users>usersSet = new HashSet<>();
            usersSet.add(user);

            service.setUsers(usersSet);
            serviceOfServices.addServices(service);
            return ResponseEntity.ok("OK");


        }catch (Exception E){
            return ResponseEntity.ok(E);
        }
    }
}
