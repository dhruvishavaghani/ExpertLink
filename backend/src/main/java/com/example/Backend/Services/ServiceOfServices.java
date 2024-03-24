package com.example.Backend.Services;

import com.example.Backend.Model.Service;

import java.util.List;

public interface ServiceOfServices {

    Service addServices(Service service);

    List<Service> getServices();
}
