import { BitImg, BitInfo, BtnPlayOnImg, ImgWrapper } from './style';

export const BitItem = () => {
  return (
    <div>
      <ImgWrapper>
        <BtnPlayOnImg />
        <BitImg src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_600,h_600/https://vinyl-record.ru/wp-content/uploads/2020/12/Disk-12-blc2-1-1.jpg" />
      </ImgWrapper>
      <BitInfo>
        <span>Bit name</span>
        <span>
          <b>30</b> USD
        </span>
      </BitInfo>
      <audio src="https://s755sas.storage.yandex.net/rdisk/c4cb4b93c7cef31a6fe4729a098d771d4d9d97973b32b65e7a78a51e6d73bcf2/66cab9c8/hS5lyBy-tMoxHpI8yf1aK8A1IBqzKHmm25wIJtgPP4JZaBi2smvxhkKc4tEHs0BhPkvnylc07NHRbarLch8YYA==?uid=0&filename=audio.mp3&disposition=attachment&hash=aBGYuMGQAXVGfdJ4bpe9yCd1AcN5T4ACSI+ZHwSZcRazfcxjxl9OhWYVc/8sAy+Xq/J6bpmRyOJonT3VoXnDag==&limit=0&content_type=audio/mpeg&owner_uid=322394462&fsize=2442623&hid=2cce3ea34110f9795ba013323b7ebd2a&media_type=audio&tknv=v2&ts=6207ad94c0200&s=4c3efa92cd9d51a5a0e22b92e53f8cdb6afc9b0bb375777213667d1cb02d2dcd&pb=U2FsdGVkX198s5hyK31EacXORKhj4PDxLWNP3oIlUT6ImG7SDLeioJ6ouJ6uZiKW9Iz78DVSS6A6jBs2aoV9kRYxmvqsEoZJhbbrjof8Fks" />
    </div>
  );
};
