import Comment from "../models/comment.model.js"

export const getComments = async (req, res) =>{
    const comments = await Comment.find()
    res.json(comments)
}
export const getCommentsUser = async (req, res) =>{
    const comments = await Comment.find({
        user:req.user.id
    }).populate("user")
    res.json(comments)
}
export const createComment = async (req, res) =>{
    const { publication } = req.body

    const newComment = new Comment({
        publication,
        user: req.user.id
    })
    const savedComment = await newComment.save()
    res.json(savedComment)
}

export const getComment = async (req, res) =>{
    const comment = await Comment.findById(req.params.id).populate("user")

    if (!comment) return res.status(404).json({message: "Sin publicación"})

    res.json(comment)
}

export const deleteComment = async (req, res) =>{
    const comment = await Comment.findByIdAndDelete(req.params.id)

    if (!comment) return res.status(404).json({message: "No se encontró la publicación"})

    return res.sendStatus(204)
}

export const updateComment = async (req, res) =>{
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new:true})

    if (!comment) return res.status(404).json({message: "Sin publicaciones"})

    res.json(comment)
}
