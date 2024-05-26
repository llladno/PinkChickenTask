import type { MessageI } from '@/types/types'
import { useFilesStore } from '@/stores/store'

class Testapi {
  async sendMessage(value: string): Promise<MessageI> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (
            value === 'Привет' ||
            value === 'Здравствуйте' ||
            value === 'привет' ||
            value === 'здравствуйте'
          ) {
            const data: MessageI = {
              text: 'Здравствуйте! Мы рады видеть тебя в нашем чате. Если хотите попробовать наши услуги, нажмите на кнопку "Заказать медиаплан" или "Заказать отчёт"',
              date: new Date().toLocaleTimeString().slice(0, -3),
              from: 'assistant'
            }
            resolve(data)
          } else if (value === 'Заказать медиаплан') {
            useFilesStore().setMedia()
            const data = {
              text: 'Ваш медиаплан будет готов через некоторое время. Спасибо за понимание!',
              date: new Date().toLocaleTimeString().slice(0, -3),
              from: 'assistant'
            }
            resolve(data)
          } else if (value === 'Заказать отчёт') {
            useFilesStore().setReport()
            const data = {
              text: 'Мы уже начали готовить ваш отчёт, он будет готов через некоторое время. Спасибо за понимание!',
              date: new Date().toLocaleTimeString().slice(0, -3),
              from: 'assistant'
            }
            resolve(data)
          } else {
            const data = {
              text: 'Не понимаю ваше сообщение, попробуйте написать, что-то другое',
              date: new Date().toLocaleTimeString().slice(0, -3),
              from: 'assistant'
            }
            resolve(data)
          }
        }, 1000)
      })
    } catch (e) {
      console.log(e)
    }
    throw new Error('error')
  }
}

export default new Testapi()
