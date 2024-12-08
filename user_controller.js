import md5 from 'md5'
import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

export const getAlluser = async(req, res) => {
    try {
        const response = await prisma.user.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
export const getUserById = async(req, res) => {
    try {
        const result = await prisma.user.findUnique({
            where:{
                userID: Number(req.params.id)
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}
export const addUser = async(req, res) => {
    const {nama, username, password,Role} = req.body
    try {
        const result = await prisma.user.create({
            data:{
                nama_user: nama,
                username: username,
                password: md5 (password),
                role : Role
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateUser = async(req, res) => {
    const {nama, username, password,Role} = req.body
    try {
        const result = await prisma.user.update({
            where:{
                userID: Number(req.params.id)
            },
            data:{
                nama_user: nama,
                username: username,
                password: md5(password),
                role:Role
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const deleteUser = async(req, res) => {
    try {
        const result = await prisma.user.delete({
            where:{
                userID: Number(req.params.id)
            },
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}