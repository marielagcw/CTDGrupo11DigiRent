package com.grupo11.demo.controller;

import com.grupo11.demo.util.ErrorMessageDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class ExceptionHandlerController {
    private final Logger log = LoggerFactory.getLogger(ExceptionHandlerController.class);

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorMessageDTO> generalException(Exception e) {
        log.error("Error 500", e);
        return ResponseEntity.status(500).body(new ErrorMessageDTO("Internal Server Error", "El pedido no pudo ser resuelto, intente nuevamente más tarde", 500));
    }

    @ExceptionHandler(NoSuchElementException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorMessageDTO> notFoundElement(NoSuchElementException e) {
        return ResponseEntity.status(404).body(new ErrorMessageDTO("Not Found", "El elemento no pudo ser encontrado, verifique el valor ingresado e intente nuevamente", 404));
    }

@ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ResponseEntity<ErrorMessageDTO> forbiddenElement(NoSuchElementException e) {
        return ResponseEntity.status(403).body(new ErrorMessageDTO("Not Allowed", "No tiene autorizacion", 403));
    }

}
