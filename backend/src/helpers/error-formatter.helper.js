import { validationResult } from "express-validator"
import httpStatus from "http-status"

export const errorFormatter = (req, res) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
      const extractedErrors = []
      result.array({ onlyFirstError: true }).map(
        err => extractedErrors.push({ [err.param]: err.msg, value: err.value })
      )
  
      return res
        .status(422)
        .json({
            status: httpStatus[422],
            message: httpStatus["422_MESSAGE"],
          errors: extractedErrors
        })
        .end()
    }
  
  }