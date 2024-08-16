import  { useState, useEffect} from "react"
import { AnimatePresence, motion} from "framer-motion"
import { useSnapshot } from "valtio"

import config from "../config/config"
import state from "../store"
import { download} from "../assets"
import {downloadCanvasToImage, reader} from "../config/helpers"
import { EditorTabs, FilterTabs, DecalTypes} from "../config/constants"
import { fadeAnimation, slideAnimation} from "../config/motion"


const CustomiZePage = () => {
  return (
    <div>CustomiZePage</div>
  )
}

export default CustomiZePage