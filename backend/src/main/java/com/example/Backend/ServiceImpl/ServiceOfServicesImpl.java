package com.example.Backend.ServiceImpl;

import com.example.Backend.Model.Service;
import com.example.Backend.Repository.ServiceRepo;
import com.example.Backend.Services.ServiceOfServices;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class ServiceOfServicesImpl implements ServiceOfServices {

    @Autowired
    ServiceRepo serviceRepo;

    @Override
    public Service addServices(Service service) {
        Service service1 = serviceRepo.save(service);
        return null;
    }

    @Override
    public List<Service> getServices() {
        return null;
    }
}
