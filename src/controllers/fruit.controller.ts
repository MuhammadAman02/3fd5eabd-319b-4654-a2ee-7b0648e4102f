import { FastifyRequest, FastifyReply } from 'fastify';
import { getFruits } from '../services/fruit.service';

export async function getFruitsHandler(
  req: FastifyRequest,
  res: FastifyReply
) {
  const result = getFruits();
  res.status(200).send(result);
}