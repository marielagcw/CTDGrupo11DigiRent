package com.grupo11.demo.controller;

import com.grupo11.demo.util.ErrorMessageDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpServerErrorException;

import java.util.NoSuchElementException;

@RestControllerAdvice
@Slf4j
public class ExceptionHandlerController {

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorMessageDTO> generalException(Exception e) {
        log.error("Error general del servidor", e);
        return ResponseEntity.status(500).body(new ErrorMessageDTO("Internal Server Error", "El pedido no pudo ser resuelto, intente nuevamente más tarde", 500));
    }

    @ExceptionHandler(NoSuchElementException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorMessageDTO> notFoundElement(NoSuchElementException e) {
        log.error("No encontrado", e);
        return ResponseEntity.status(404).body(new ErrorMessageDTO("Not Found", "El elemento no pudo ser encontrado, verifique el valor ingresado e intente nuevamente", 404));
    }

}
