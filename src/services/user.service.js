const prisma = require("../config/db");

exports.createUser = async (data) => {
  return prisma.user.create({ data });
};

exports.getUsers = async () => {
  return prisma.user.findMany({
    where: { deletedAt: null }
  });
};

exports.getUserById = async (id) => {
  return prisma.user.findUnique({ where: { id } });
};

exports.updateUser = async (id, data) => {
  return prisma.user.update({
    where: { id },
    data
  });
};

exports.deleteUser = async (id) => {
  return prisma.user.update({
    where: { id },
    data: { deletedAt: new Date() }
  });
};