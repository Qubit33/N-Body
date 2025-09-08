#version 300 es
precision highp float;

in vec3 v_color;
out vec4 outColor;

uniform float u_time;

void main() {
    vec2 uv = gl_PointCoord * 2.0 - 1.0;
    float r = dot(uv, uv);
    float alpha = exp(-r * 3.5);
    float seed = dot(v_color, vec3(12.9898, 78.233, 37.719));
    float flicker = 0.9 + 0.1 * sin(u_time * 0.5 + seed);
    alpha *= flicker;
    outColor = vec4(v_color, alpha);
}