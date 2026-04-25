

package com.transport.transport_tracker.service;

import com.transport.transport_tracker.model.Route;
import com.transport.transport_tracker.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    private RouteRepository routeRepository;

    // Get all routes
    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    // Get one route by ID
    public Optional<Route> getRouteById(Long id) {
        return routeRepository.findById(id);
    }

    // Create new route
    public Route createRoute(Route route) {
        return routeRepository.save(route);
    }

    // Update existing route
    public Route updateRoute(Long id, Route routeDetails) {
        Route route = routeRepository.findById(id).orElseThrow();
        route.setRouteName(routeDetails.getRouteName());
        route.setRouteNumber(routeDetails.getRouteNumber());
        route.setStartStop(routeDetails.getStartStop());
        route.setEndStop(routeDetails.getEndStop());
        route.setFrequency(routeDetails.getFrequency());
        return routeRepository.save(route);
    }

    // Delete route
    public void deleteRoute(Long id) {
        routeRepository.deleteById(id);
    }
}
