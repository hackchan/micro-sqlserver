import boom from '@hapi/boom'
import { error } from '../../utils/response'

export function wrapError(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.teapot(err))
  }
  next(err)
}

export function errorResponse(err, req, res, next) {
  const {
    output: { statusCode, payload }
  } = err
  error(req, res, payload, statusCode)
}
