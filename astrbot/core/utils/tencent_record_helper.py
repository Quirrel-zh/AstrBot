import wave
from io import BytesIO

async def tencent_silk_to_wav(silk_path: str, output_path: str) -> str:
    import pysilk
    
    with open(silk_path, "rb") as f:
        input_data = f.read()
        if input_data.startswith(b'\x02'):
            input_data = input_data[1:]
        input_io = BytesIO(input_data)
        output_io = BytesIO()
        pysilk.decode(input_io, output_io, 24000)
        output_io.seek(0)
        with wave.open(output_path, 'wb') as wav:
            wav.setnchannels(1)
            wav.setsampwidth(2)
            wav.setframerate(24000)
            wav.writeframes(output_io.read())
        
    return output_path

async def wav_to_tencent_silk(wav_path: str) -> BytesIO:
    import pysilk

    with wave.open(wav_path, 'rb') as wav:
        wav_data = wav.readframes(wav.getnframes())
        wav_data = BytesIO(wav_data)
        output_io = BytesIO()
        pysilk.encode(wav_data, output_io, 24000)
        output_io.seek(0)
        
        # 在首字节添加 \x02
        silk_data = output_io.read()
        silk_data_with_prefix = b'\x02' + silk_data
        
        return BytesIO(silk_data_with_prefix)